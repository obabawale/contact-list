import React from 'react';
import ContactList from './contactList';
import logo from './logo.svg';
import './App.css';

const CONTACTS = [
  {
    id: 1,
    name: "Olalekan Babawale",
    age: 24,
    gender: "Male"
  },
  {
    id: 2,
    name: "Babatope Ajepe",
    age: 24,
    gender: "Male"
  },
  {
    id: 3,
    name: "Ifeoluwa Amoo",
    age: 24,
    gender: "Male"
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      contacts: CONTACTS 
    }
  }
  render () {
    return (
      <div className="App">
        <ContactList contacts={this.state.contacts}/> 
      </div>
    );
  }
}

export default App;
