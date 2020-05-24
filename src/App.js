import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "react-datepicker/dist/react-datepicker.css";
import Todo from "./components/Todo/TodoComponent";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar/>
       <Todo />
      </div>
    );
  }
}

export default App;