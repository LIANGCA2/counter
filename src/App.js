import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import CountClick from './counter.jsx';
import Group from './counterGroup.jsx';
class App extends Component {

    constructor(props){
        super();
        this.state = {
            couterNumber:1
        }
    }

    couterNum=(event)=>{
        this.setState({couterNumber: event.target.value});
    }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <input type = "text" onChange={(this.couterNum).bind(this)}></input>
            {/*<div>{this.state.couterNumber}</div>*/}
            <div><Group number = {this.state.couterNumber}/></div>
            <div></div>
        </p>
      </div>
    );
  }
}


export default App;