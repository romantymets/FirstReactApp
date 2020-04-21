import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import TodoList from "./Todo/Todolist";
class App extends React.Component {
  constructor() {
    super();
    // стан комонента
    this.state = {
      textHere: "",
      todos: []
    };
  }
  onTextChange = (e) => {
     this.setState({ textHere: e.target.value })
  };
  onButtonClick =() => {
    const newInputText = this.state.textHere;
    const oldTodos = this.state.todos;
    this.setState({todos:[...oldTodos,newInputText]})

  }
  render () {
    const newInputText = this.state.textHere;
    const todos = this.state.todos;
    return (
      <div className="app" >
        <h1> helo world </h1>
        <div className="but">
          <input type={"text"} onChange={this.onTextChange}>

          </input>
          <button className="btn btn-primary" type={"button"} onClick={this.onButtonClick}>
            Add todo
          </button>
          <ul>
            {todos.map((todo) =>
              (<li>
                  {todo}
              </li>)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;