import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextEditor from './components/TextEditor/TextEditor';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  constructor() {
    super();
    // стан комонента
    this.state = {
      counter: 0,
      colorButton: 'white',
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onMouseOverButton = this.onMouseOverButton.bind(this);
    this.onMouseLeaveButton = this.onMouseLeaveButton.bind(this);
  }
  onButtonClick () {
    console.log('-----> on click', );
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 })
  }
  onMouseOverButton () {
    this.setState({colorButton:'red'})
    console.log('-----> on onMouseOverButton', );
  }
  onMouseLeaveButton() {
    this.setState({colorButton:'white'})
  }
  render () {
    const counter = this.state.counter;
    const begraund = this.state.colorButton;
    console.log(' render counter -->', counter)
    return (
      <div className="App" >
        <h1> helo world </h1>
        // використання змінної в HTML
        <p>counter: {counter}</p>
        <button
          onClick={this.onButtonClick}
          onMouseOver={this.onMouseOverButton}
          onMouseLeave={this.onMouseLeaveButton}
          style={{backgroundColor: begraund}}
        >
          increase counter {begraund}
        </button>
        <TextEditor />
        <TodoList />
      </div>
    );
  }
}

export default App;
