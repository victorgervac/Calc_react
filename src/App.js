import React from 'react';
import './App.css';
// import { Button, Table} from "semantic-ui-react";
import {Container} from "semantic-ui-react"
import Buttons from "./Buttons";
import Result from "./Result";
import "./styles.css";

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     result: ""
  //   }
  // }
  state = {
    result: " "
  }
  buttonPressed = buttonName =>{
    this.setState({
      result: buttonName
    });
  }
  
  // calculate = () => {
  //     this.setState({
  //       result: eval (this.state.result)
  //     });
  //}
  render(){
    return(
      <Container >
        <Result result={this.state.result}/>
        <Buttons buttonPressed={this.buttonPressed}/>
      </Container>
    );
  }
}

export default App;
