import React, { useEffect, useState } from 'react';
import './App.css';
import { FetchedData } from "./components/FetchedData"
import { Container, Segment } from "semantic-ui-react"
import { InputForm } from "./components/InputForm"

function App() {
  const [fetchedData, setData] = useState([]);
  const [prediction, setPrediction] = useState("Placeholder ");

   const styleFormTitles = {
    fontSize: "36px",
    marginTop: "0.5em"
  }

  return (
      <Container style={ {marginTop: 100} }>
        <InputForm onNewPrediction={prediction => setPrediction(prediction)}/>
        <object style={styleFormTitles}>Prediction</object>
        <Segment style={styleFormTitles}>{ prediction }</Segment>
      </Container>
  );
}

export default App;
