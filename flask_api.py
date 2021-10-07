import boto3
from flask import Flask
from flask import request
from flask import json
import pandas as pd
import pickle
#from flask_cors import CORS

#s3://churne2eproject/models/

SECRET = '+TBhvR/6AmcdQLgloXpIj+SqqyBsNhhl2ZGZBTmP'
PUBLIC = 'AKIATABDXPVHGT5Q63EP'

BUCKET_NAME = 'churne2eproject'

MODEL_FILE_NAME = 'model.pickle'
MODEL_LOCAL_PATH = 'models/' + MODEL_FILE_NAME

SCALER_FILE_NAME = 'scaler.pickle'
SCALER_LOCAL_PATH = 'scalers/' + SCALER_FILE_NAME


pand_cols = ['gender',
 'SeniorCitizen',
 'Partner',
 'Dependents',
 'tenure',
 'PhoneService',
 'MultipleLines',
 'InternetService',
 'OnlineSecurity',
 'OnlineBackup',
 'DeviceProtection',
 'TechSupport',
 'StreamingTV',
 'StreamingMovies',
 'Contract',
 'PaperlessBilling',
 'PaymentMethod',
 'MonthlyCharges',
 'TotalCharges']

nb_cat_labels = {'MultipleLines':3,
 'InternetService':3,
 'OnlineSecurity':3,
 'OnlineBackup':3,
 'DeviceProtection':3,
 'TechSupport':3,
 'StreamingTV':3,
 'StreamingMovies':3,
 'PaymentMethod':4}


app = Flask(__name__)
#CORS(app)

@app.route('/', methods=["POST"])
def index():
  payload = json.loads(request.get_data().decode("utf-8"))
  payload = payload["payload"]
  print('\n', payload, len(payload), '\n')
  # Convert from strings to floats (should we convert the ints to ints instead?)
  for i in range(len(payload)):
    if i in [4, 17, 18]:
        payload[i] = float(payload[i])
    else:
        payload[i] = int(payload[i])


  # If the age is greater than 65, declare the person a senior citizen
  if payload[1] >= 65:
    payload[1] = 0
  else:
    payload[1] = 1

  # If do not have phone service, set "multiple lines" to the proper feature
  if payload[5] == 0:
    payload[6] = 1

  # If do not have internet, set relevant params to proper features
  if payload[7] == 2:
    payload[8] = 1
    payload[9] = 1
    payload[10] = 1
    payload[11] = 1
    payload[12] = 1
    payload[13] = 1

  # Create a pandas dataframe from the list
  df = pd.DataFrame([payload], columns=pand_cols)

  print(df)

  # One hot the pandas dataframe
  for elt in list(nb_cat_labels.keys()):
    # Index of column to be one hotted
    i = df.columns.get_loc(elt)

    # Create list that holds one-hotted variable
    new_df = [0 for i in range(nb_cat_labels[elt])]
    new_df[df[elt][0]] = 1

    # Create column names for the new dataframe
    new_cols = [elt+'_'+str(i) for i in range(nb_cat_labels[elt])]

    # Create a new df of elt one-hotted
    new_df = pd.DataFrame([new_df], columns=new_cols)

    # Drop elt from the df
    df = df.drop(columns=[elt])

    # Add each column of the new_df in place of elt
    for j in new_df:
        df.insert(loc=i, column=j, value=new_df[j])
        i += 1  # Could also add in reverse order to avoid iterating i

  print(df)
  # Add the engineered features
  df['MonthlyCharges_sq'] = df['MonthlyCharges']**2
  df['MonthlyTenureInteraction'] = df['MonthlyCharges']*df['tenure']

  # Scale the numerical features within the dataframe
  df = scale_df(df)
  # Create the prediction
  prediction = int(load_model().predict(df)[0])
  # Convert prediction to string so we can easily display it on the front end
  if prediction == 0:
    prediction = "This person is not likely to churn"
  else:
    prediction = "This person is likely to churn"
  data = {}
  data["data"] = prediction

  print('\nDATA\n', data, '\n')

  return json.dumps(data)

@app.route('/get', methods=["GET"])
def get_ex():
  return json.dumps([{'payload': [0, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 29.85, 29.85, 891.0225]}])

# Loading our model from S3
def load_model():
  s3 = boto3.resource('s3',
         aws_access_key_id=PUBLIC,
         aws_secret_access_key= SECRET
         )
  my_pickle = pickle.loads(s3.Bucket(BUCKET_NAME).Object(MODEL_LOCAL_PATH).get()['Body'].read())
  return my_pickle

# Loading scaler for S3
def load_scaler():
  s3 = boto3.resource('s3',
         aws_access_key_id=PUBLIC,
         aws_secret_access_key= SECRET
         )
  my_pickle = pickle.loads(s3.Bucket(BUCKET_NAME).Object(SCALER_LOCAL_PATH).get()['Body'].read())
  return my_pickle


# Function for scaling the numerical features of the prediction dataframe
def scale_df(df):
  numer = ["tenure", "MonthlyCharges", "TotalCharges", "MonthlyCharges_sq", "MonthlyTenureInteraction"]

  scaler = load_scaler()

  df[numer] = pd.DataFrame(scaler.transform(df[numer]), columns=numer)

  return df


# Function for one hot encoding a list
def one_hot_encode():
    return None

if __name__ == "__main__":
  app.run(host="127.0.0.1", port=5000)
