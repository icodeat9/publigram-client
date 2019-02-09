import React, { Component } from 'react';
import './styles/styles.css'
import Login from './containers/login'
import Main from './containers/main'
import { BrowserRouter, Router } from 'react-router-dom';
import axios from 'axios'
// eslint-disable-next-line
class App extends Component {

  state =
    {
      logged: true
    }

    componentDidMount()
    {
      document.title = "PUBLIGRAM";      
    }

  accessMain = () => {
    this.setState({ logged: true })
  }

  unlog = () =>
  {
    this.setState({logged: false})
  }

  render() {
    const { logged } = this.state;
    return (
      <div id="mainDiv" style={{overflow: "hidden"}} >
        {logged ?
        <BrowserRouter>
        <div style={{backgroundColor: "#282828"}} >
          <Main unlog={this.unlog}/>

        </div>
          </BrowserRouter>
        : <Login accessMain={this.accessMain}/>
        }
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"/>
      </div>
    );
  }
}

export default App;
