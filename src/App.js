import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventoryList: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(response => {
      console.log(response.data);
      this.setState({
        inventoryList: response.data
      })
    })
    .catch(err => console.log(err)
    )
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventoryList={this.state.inventoryList}/>
        <Form />
      </div>
    );
  }
}

export default App;
