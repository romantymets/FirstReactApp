import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Todo from "./components/Todo/TodoComponent";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
       <Todo />
      </div>
    );
  }
}

export default App;