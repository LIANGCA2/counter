import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountClick from './counter.jsx';
class App extends Component {

    // constructor(props){
    //     super();
    //     this.state = {
    //         couterNumber:0
    //     }
    // }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {/*<input type = "text" >{this.state.couterNumber}</input>*/}
            <div><CountClick/></div>
        </p>
      </div>
    );
  }
}


export default App;