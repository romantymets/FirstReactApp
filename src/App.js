import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Todolist from "./Todo/Todolist";

class App extends React.Component {
  constructor() {
    super();
    // стан комонента
    this.state = {
      newInputText: "",
      todos: [],
      check: false
    };
  }

  onTextChange = (e) => {
    this.setState({ newInputText: e.target.value, })
  };
  onButtonClick = () => {
    const newInputText = this.state.newInputText;
    const oldTodos = this.state.todos;
    this.setState({
      todos: [...oldTodos, {
        id: oldTodos.length + 1,
        title: newInputText,
        complited: false
      }]
    });
  }
  onItemCheck = (id) => (e) => {
    const checket = e.target.checked
    console.log(checket)
    //1 знайти елемент масиву todo
    const carentTodo = this.state.todos.find(todo => todo.id === id)
    //2 поміняти в ньому valye.complite na e.target.checked
    carentTodo.complited = checket
    // 3 create new array with new todo.it
    const newArray = [];
    this.state.todos.forEach(todo => {
      if (todo.id === id) {
        newArray.push(carentTodo)
      } else {
        newArray.push(todo)
      }
    })
    //4 put new array to state
    this.setState({ todos: newArray })
  };
  /** todo: додати метод onItemRemove за аналогією як (не додавати в new array)*/

  render() {
    const newInputText = this.state.newInputText;
    const todos = this.state.todos;
    const check = this.state.check;
    return (
      <div className="app">
        <h1> helo world </h1>
        <div className="button-conteiner">
          <input type={"text"} onChange={this.onTextChange}>

          </input>
          <button className="btn btn-primary" type={"button"} onClick={this.onButtonClick}>
            Add todo
          </button>
          <Todolist
            todos={todos}
            onItemCheck={this.onItemCheck}
          >
          </Todolist>

        </div>

      </div>
    );
  }
}

export default App;