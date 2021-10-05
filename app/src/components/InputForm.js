import React, { useState, useEffect } from 'react';
import {Dropdown, Input, Button, Form} from "semantic-ui-react"

const genderOptions= [
  {
    key: 'Male',
    text: 'Male',
    value: '1',
  },
  {
    key: 'Female',
    text: 'Female',
    value: '0',
  },
]
const partnerOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '1',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const dependentsOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '1',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const phoneServiceOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '1',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const multipleLinesOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const internetServiceOptions= [
  {
    key: 'No',
    text: 'No',
    value: '2',
  },
  {
    key: 'DSL',
    text: 'DSL',
    value: '0',
  },
  {
    key: 'Fiber Optic',
    text: 'Fiber Optic',
    value: '1',
  },
]
const onlineSecurityOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const onlineBackupOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const deviceProtectionOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const techSupportOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const streamingTVOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const streamingMoviesOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '2',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const contractOptions= [
  {
    key: 'Month-to-month',
    text: 'Month-to-month',
    value: '0',
  },
  {
    key: 'One Year',
    text: 'One Year',
    value: '1',
  },
  {
    key: 'Two Year',
    text: 'Two Year',
    value: '2',
  },
]
const paperlessOptions= [
  {
    key: 'Yes',
    text: 'Yes',
    value: '1',
  },
  {
    key: 'No',
    text: 'No',
    value: '0',
  },
]
const paymentMethodOptions= [
  {
    key: 'Electronic check',
    text: 'Electronic check',
    value: '2',
  },
  {
    key: 'Mailed check',
    text: 'Mailed check',
    value: '3',
  },
  {
    key: 'Bank transfer (automatic)',
    text: 'Bank transfer (automatic)',
    value: '0',
  },
  {
    key: 'Credit card (automatic)',
    text: 'Credit card (automatic)',
    value: '1',
  },
]

const exampleData = [
  {
    gender:'1',
    age:'0',
    partner:'0',
    dependents:'0',
    tenure:'24',
    phoneService:'1',
    multipleLines:'0',
    internetService:'0',
    onlineSecurity:'0',
    onlineBackup:'2',
    deviceProtection:'0',
    techSupport:'0',
    streamingTV:'0',
    streamingMovies:'0',
    contract:'0',
    paperless:'1',
    paymentMethod:'3',
    monthlyCharges:'29.95',
    totalCharges:'29.95',
  },
  {
    gender:'0',
    age:'0',
    partner:'1',
    dependents:'1',
    tenure:'33',
    phoneService:'1',
    multipleLines:'2',
    internetService:'1',
    onlineSecurity:'2',
    onlineBackup:'0',
    deviceProtection:'2',
    techSupport:'0',
    streamingTV:'2',
    streamingMovies:'2',
    contract:'1',
    paperless:'1',
    paymentMethod:'3',
    monthlyCharges:'103.70',
    totalCharges:'3467.00',
  },
  {
    gender:'0',
    age:'0',
    partner:'1',
    dependents:'1',
    tenure:'41',
    phoneService:'1',
    multipleLines:'2',
    internetService:'1',
    onlineSecurity:'2',
    onlineBackup:'2',
    deviceProtection:'0',
    techSupport:'0',
    streamingTV:'2',
    streamingMovies:'0',
    contract:'0',
    paperless:'1',
    paymentMethod:'0',
    monthlyCharges:'94.30',
    totalCharges:'3893.60',
  },
  {
    gender:'1',
    age:'0',
    partner:'0',
    dependents:'0',
    tenure:'72',
    phoneService:'1',
    multipleLines:'0',
    internetService:'2',
    onlineSecurity:'1',
    onlineBackup:'1',
    deviceProtection:'1',
    techSupport:'1',
    streamingTV:'1',
    streamingMovies:'1',
    contract:'2',
    paperless:'1',
    paymentMethod:'1',
    monthlyCharges:'19.80',
    totalCharges:'1468.75',
  },
  {
    gender:'1',
    age:'0',
    partner:'0',
    dependents:'0',
    tenure:'35',
    phoneService:'1',
    multipleLines:'0',
    internetService:'0',
    onlineSecurity:'0',
    onlineBackup:'0',
    deviceProtection:'0',
    techSupport:'0',
    streamingTV:'2',
    streamingMovies:'0',
    contract:'0',
    paperless:'0',
    paymentMethod:'3',
    monthlyCharges:'55.00',
    totalCharges:'2010.55',
  },
  {
    gender:'0',
    age:'0',
    partner:'1',
    dependents:'0',
    tenure:'35',
    phoneService:'1',
    multipleLines:'0',
    internetService:'0',
    onlineSecurity:'0',
    onlineBackup:'2',
    deviceProtection:'0',
    techSupport:'2',
    streamingTV:'0',
    streamingMovies:'0',
    contract:'0',
    paperless:'0',
    paymentMethod:'2',
    monthlyCharges:'56.85',
    totalCharges:'1861.10',
  },
  {
    gender:'1',
    age:'1',
    partner:'0',
    dependents:'0',
    tenure:'47',
    phoneService:'1',
    multipleLines:'2',
    internetService:'1',
    onlineSecurity:'0',
    onlineBackup:'0',
    deviceProtection:'0',
    techSupport:'0',
    streamingTV:'2',
    streamingMovies:'0',
    contract:'0',
    paperless:'1',
    paymentMethod:'1',
    monthlyCharges:'86.05',
    totalCharges:'3865.60',
  },
  {
    gender:'1',
    age:'0',
    partner:'0',
    dependents:'0',
    tenure:'5',
    phoneService:'1',
    multipleLines:'0',
    internetService:'0',
    onlineSecurity:'0',
    onlineBackup:'2',
    deviceProtection:'0',
    techSupport:'0',
    streamingTV:'0',
    streamingMovies:'0',
    contract:'0',
    paperless:'1',
    paymentMethod:'2',
    monthlyCharges:'51.35',
    totalCharges:'262.30',
  },
  {
    gender:'0',
    age:'0',
    partner:'1',
    dependents:'1',
    tenure:'49',
    phoneService:'1',
    multipleLines:'2',
    internetService:'1',
    onlineSecurity:'0',
    onlineBackup:'0',
    deviceProtection:'0',
    techSupport:'0',
    streamingTV:'2',
    streamingMovies:'2',
    contract:'0',
    paperless:'1',
    paymentMethod:'2',
    monthlyCharges:'95.60',
    totalCharges:'4783.5',
  },
  {
    gender:'0',
    age:'0',
    partner:'0',
    dependents:'0',
    tenure:'12',
    phoneService:'1',
    multipleLines:'0',
    internetService:'2',
    onlineSecurity:'1',
    onlineBackup:'1',
    deviceProtection:'1',
    techSupport:'1',
    streamingTV:'1',
    streamingMovies:'1',
    contract:'1',
    paperless:'0',
    paymentMethod:'2',
    monthlyCharges:'20.15',
    totalCharges:'260.70',
  },
  {
    gender:'1',
    age:'0',
    partner:'0',
    dependents:'0',
    tenure:'18',
    phoneService:'1',
    multipleLines:'2',
    internetService:'2',
    onlineSecurity:'1',
    onlineBackup:'1',
    deviceProtection:'1',
    techSupport:'1',
    streamingTV:'1',
    streamingMovies:'1',
    contract:'1',
    paperless:'0',
    paymentMethod:'3',
    monthlyCharges:'23.75',
    totalCharges:'424.5',
  },
  {
    gender:'0',
    age:'1',
    partner:'0',
    dependents:'0',
    tenure:'7',
    phoneService:'1',
    multipleLines:'0',
    internetService:'0',
    onlineSecurity:'0',
    onlineBackup:'2',
    deviceProtection:'2',
    techSupport:'0',
    streamingTV:'2',
    streamingMovies:'0',
    contract:'0',
    paperless:'1',
    paymentMethod:'2',
    monthlyCharges:'64.95',
    totalCharges:'493.65',
  },
]

export const InputForm = ( {onNewPrediction} ) => {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [partner, setPartner] = useState('')
  const [dependents, setDependents] = useState('')
  const [tenure, setTenure] = useState('')
  const [phoneService, setPhoneService] = useState('')
  const [multipleLines, setMultipleLines] = useState('')
  const [internetService, setInternetService] = useState('')
  const [onlineSecurity, setOnlineSecurity] = useState('')
  const [onlineBackup, setOnlineBackup] = useState('')
  const [deviceProtection, setDeviceProtection] = useState('')
  const [techSupport, setTechSupport] = useState('')
  const [streamingTV, setStreamingTV] = useState('')
  const [streamingMovies, setStreamingMovies] = useState('')
  const [contract, setContract] = useState('')
  const [paperless, setPaperless] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [monthlyCharges, setMonthlyCharges] = useState('')
  const [totalCharges, setTotalCharges] = useState('')

  const [noInternet, setNoInternet] = useState('')
  const [noPhone, setNoPhone] = useState('')

  const [internetDependentsText, setInternetDependentsText] = useState('')
  const [phoneDependentsText, setPhoneDependentsText] = useState('')

  const [predictionText, setPredictionText] = useState('')

  const styleFormTitles = {
    fontSize: "36px",
    marginTop: "1000px"
  }
  const styleFormEntries = {
    width: "200px",
    marginLeft: "1em",
    marginBottom: "2em",
    marginTop: "1em"
  }
  const styleFormEntriesTopLine = {
    width: "200px",
    marginLeft: "1em",
    marginTop: "1em"
  }
  const styleFormEntriesBottomLine = {
    width: "200px",
    marginLeft: "1em",
    marginBottom: "2em",
  }

  const [prediction, setPrediction] = useState('')

  const [randDatum, setRandDatum] = useState(0)

  // Update main App.js on a change
  useEffect(() => {
    onNewPrediction(prediction)
  }, [setPrediction, prediction])

  return (
    <div>
    <Form>
    <object style={styleFormTitles}>Basic Information</object>
    <Form.Group widths='equal'>
        <Dropdown
          placeholder='Gender'
          fluid
          value={gender}
          selection
          clearable
          style={styleFormEntries}
          options={genderOptions}
          onChange={(_, data) => {setGender(data.value); console.log(data); console.log(data.value)}}
        />
        <Input
          placeholder='Age'
          fluid
          value={age}
          style={styleFormEntries}
          onChange={(_, data) => setAge(data.value)}
        />
        <Dropdown
          placeholder='Partner'
          fluid
          value={partner}
          selection
          clearable
          style={styleFormEntries}
          options={partnerOptions}
          onChange={(_, data) => setPartner(data.value)}
        />
        <Dropdown
          placeholder='Dependents'
          fluid
          value={dependents}
          selection
          clearable
          style={styleFormEntries}
          options={dependentsOptions}
          onChange={(_, data) => setDependents(data.value)}
        />
        <Input
          placeholder='Tenure'
          fluid
          value={tenure}
          style={styleFormEntries}
          onChange={(_, data) => setTenure(data.value)}
        />
    </Form.Group>
    <object style={styleFormTitles}>Phone Service</object>
    <Form.Group widths='equal'>
    <Dropdown
      placeholder='Phone Service'
      fluid
      value={phoneService}
      selection
      clearable
      style={styleFormEntries}
      options={phoneServiceOptions}
      onChange={(_, data) => {setPhoneService(data.value);
        if(data.value==="0"){
          setNoPhone(true);
          setPhoneDependentsText("No Phone")
        }
        else{
          setNoPhone(false);
          setPhoneDependentsText("")
        };
        }}
    />
    <Dropdown
      placeholder='Multiple Lines'
      fluid
      value={multipleLines}
      selection
      clearable
      text={phoneDependentsText}
      disabled={noPhone}
      style={styleFormEntries}
      options={multipleLinesOptions}
      onChange={(_, data) => setMultipleLines(data.value)}
    />
    </Form.Group>
    <object style={styleFormTitles}>Internet Service</object>
    <Form.Group widths='equal'>
    <Dropdown
      placeholder='Internet Service'
      fluid
      value={internetService}
      selection
      clearable
      style={styleFormEntriesTopLine}
      options={internetServiceOptions}
      onChange={(_, data) => {setInternetService(data.value);
        if(data.value==="2"){
          setNoInternet(true);
          setInternetDependentsText("No Internet")
        }
        else{
          setNoInternet(false);
          setInternetDependentsText("")
          };
        }}
    />
    <Dropdown
      placeholder='Online Security'
      fluid
      value={onlineSecurity}
      selection
      clearable
      text={internetDependentsText}
      disabled={noInternet}
      style={styleFormEntriesTopLine}
      options={onlineSecurityOptions}
      onChange={(_, data) => setOnlineSecurity(data.value)}
    />
    <Dropdown
      placeholder='Online Backup'
      fluid
      value={onlineBackup}
      selection
      clearable
      text={internetDependentsText}
      disabled={noInternet}
      style={styleFormEntriesTopLine}
      options={onlineBackupOptions}
      onChange={(_, data) => setOnlineBackup(data.value)}
    />
    <Dropdown
      placeholder='Device Protection'
      fluid
      value={deviceProtection}
      selection
      clearable
      text={internetDependentsText}
      disabled={noInternet}
      style={styleFormEntriesTopLine}
      options={deviceProtectionOptions}
      onChange={(_, data) => setDeviceProtection(data.value)}
    />
    </Form.Group>
    <Form.Group>
    <Dropdown
      placeholder='Tech Support'
      fluid
      value={techSupport}
      selection
      clearable
      text={internetDependentsText}
      disabled={noInternet}
      style={styleFormEntriesBottomLine}
      options={techSupportOptions}
      onChange={(_, data) => setTechSupport(data.value)}
    />
    <Dropdown
      placeholder='Streaming TV'
      fluid
      value={streamingTV}
      selection
      clearable
      text={internetDependentsText}
      disabled={noInternet}
      style={styleFormEntriesBottomLine}
      options={streamingTVOptions}
      onChange={(_, data) => setStreamingTV(data.value)}
    />
    <Dropdown
      placeholder='Streaming Movies'
      fluid
      value={streamingMovies}
      selection
      clearable
      text={internetDependentsText}
      disabled={noInternet}
      style={styleFormEntriesBottomLine}
      options={streamingMoviesOptions}
      onChange={(_, data) => setStreamingMovies(data.value)}
    />
    </Form.Group>
    <object style={styleFormTitles}>Financial Information</object>
    <Form.Group widths='equal'>
    <Dropdown
      placeholder='Contract'
      fluid
      value={contract}
      selection
      clearable
      style={styleFormEntriesTopLine}
      options={contractOptions}
      onChange={(_, data) => setContract(data.value)}
    />
    <Dropdown
      placeholder='Paperless'
      fluid
      value={paperless}
      selection
      clearable
      style={styleFormEntriesTopLine}
      options={paperlessOptions}
      onChange={(_, data) => setPaperless(data.value)}
    />
    <Dropdown
      placeholder='Payment Method'
      fluid
      value={paymentMethod}
      selection
      clearable
      style={styleFormEntriesTopLine}
      options={paymentMethodOptions}
      onChange={(_, data) => setPaymentMethod(data.value)}
    />
    <Input
      placeholder='Monthly Charges'
      fluid
      value={monthlyCharges}
      style={styleFormEntriesTopLine}
      onChange={(_, data) => setMonthlyCharges(data.value)}
    />
    <Input
      placeholder='Total Charges'
      fluid
      style={styleFormEntriesTopLine}
      value={totalCharges}
      onChange={(_, data) => setTotalCharges(data.value)}
    />
    </Form.Group>
    <Button
      content='Submit'
      style={{
        width: "200px",
        marginLeft: "12em",
        marginTop: "1em",
      }}
      onClick={ async () => {
        const dataToSend = {'payload': [
          gender,
          age,
          partner,
          dependents,
          tenure,
          phoneService,
          multipleLines,
          internetService,
          onlineSecurity,
          onlineBackup,
          deviceProtection,
          techSupport,
          streamingTV,
          streamingMovies,
          contract,
          paperless,
          paymentMethod,
          monthlyCharges,
          totalCharges
        ]}
        const response = await fetch("/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(dataToSend)
        }).then(res => {
          if (!res.ok){console.log('Prediction fetched unsuccessfully'); throw new Error(res.status)}
          else {console.log('Prediction fetched successfully')};
          return res.json()
        })
          .then(response => setPrediction(response['data']));
      }}
    />
    <Button
      content='Clear Form'
      style={{
        width: "200px",
        marginLeft: "4em",
        marginTop: "1em",
      }}
      onClick={ () => {
          setGender('');
          setAge('');
          setPartner('');
          setDependents('');
          setTenure('');
          setPhoneService('');
          setMultipleLines('');
          setInternetService('');
          setOnlineSecurity('');
          setOnlineBackup('');
          setDeviceProtection('');
          setTechSupport('');
          setStreamingTV('');
          setStreamingMovies('');
          setContract('');
          setPaperless('');
          setPaymentMethod('');
          setMonthlyCharges('');
          setTotalCharges('');

          setNoInternet('');
          setNoPhone('');

          setInternetDependentsText('');
          setPhoneDependentsText('');

          setPrediction('');
      }}
    />
    <Button
      content='Random'
      style={{
        width: "200px",
        marginLeft: "4em",
        marginTop: "1em",
        marginBottom: "2em",
      }}
      onClick={ () => {
          setGender(exampleData[randDatum]['gender']);
          {
            if(exampleData[randDatum]['age']<65){setAge(Math.trunc(Math.random() * (64)))}
            else{setAge(setAge(Math.trunc(Math.random() * (97-65) +65)))}
          }
          setPartner(exampleData[randDatum]['partner']);
          setDependents(exampleData[randDatum]['dependents']);
          setTenure(exampleData[randDatum]['tenure']);
          setPhoneService(exampleData[randDatum]['phoneService']);
          setMultipleLines(exampleData[randDatum]['multipleLines']);
          setInternetService(exampleData[randDatum]['internetService']);
          console.log(exampleData[randDatum]['internetService']);
          console.log(exampleData[randDatum]['internetService']==2);
          if(exampleData[randDatum]['internetService']==2){
            setNoInternet(true);
            setInternetDependentsText("No Internet")
          }
          else{
            setNoInternet(false);
            setInternetDependentsText("")
          };
          setOnlineSecurity(exampleData[randDatum]['onlineSecurity']);
          setOnlineBackup(exampleData[randDatum]['onlineBackup']);
          setDeviceProtection(exampleData[randDatum]['deviceProtection']);
          setTechSupport(exampleData[randDatum]['techSupport']);
          setStreamingTV(exampleData[randDatum]['streamingTV']);
          setStreamingMovies(exampleData[randDatum]['streamingMovies']);
          setContract(exampleData[randDatum]['contract']);
          setPaperless(exampleData[randDatum]['paperless']);
          setPaymentMethod(exampleData[randDatum]['paymentMethod']);
          setMonthlyCharges(exampleData[randDatum]['monthlyCharges']);
          setTotalCharges(exampleData[randDatum]['totalCharges']);

          setNoInternet('');
          setNoPhone('');

          setInternetDependentsText('');
          setPhoneDependentsText('');

          setPrediction('');

          setRandDatum(Math.trunc(Math.random() * (12)));
      }}
    />
        <Button
      content='Test'
      style={{
        width: "200px",
        marginLeft: "12em",
        marginTop: "1em",
      }}
      onClick={ async () => {
        const response = await fetch("/get", {
          method: "GET",
          headers: {"Content-Type": "application/json"},
        }).then(res => {
          if (!res.ok){console.log('Prediction fetched unsuccessfully'); throw new Error(res.status)}
          else {console.log('Prediction fetched successfully')};
          return res.json()
        })
          .then(response => console.log(response[0]['payload']));
      }}
    />
    </Form>
    </div>
)}









