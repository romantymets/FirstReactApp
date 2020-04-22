import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
// import TodoList from "./Todo/Todolist";
class App extends React.Component {
  constructor() {
    super();
    // стан комонента
    this.state = {
      newInputText: "",
      todos: [],

    };
  }
  onTextChange = (e) => {
     this.setState({ newInputText: e.target.value,})

  };
  onButtonClick =() => {
    const newInputText = this.state.newInputText;
    const oldTodos = this.state.todos;
     this.setState({
       todos:[...oldTodos,newInputText]});


  }
  render () {
    const newInputText = this.state.newInputText;
    const todos = this.state.todos;
    return (
      <div className="app" >
        <h1> helo world </h1>
        <div className="button-conteiner">
          <input type={"text"} onChange={this.onTextChange}>

          </input>
          <button className="btn btn-primary" type={"button"} onClick={this.onButtonClick}>
            Add todo
          </button>
          <ul className="ul-container">
            {todos.map((todo, index) =>
              (<li className="li-conteiner">
                <span>
                     <input type="checkbox" className="checkbox-container"/> {index + 1}.
                       <strong className="strong-container">
                         {todo}
                       </strong>
                </span>

                <button className="btn btn-primary"> Delete </button>
              </li>)
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;