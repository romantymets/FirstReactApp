import React from 'react';
import TodoList from "../TodoList/TodoList";
import DatePicker from "react-datepicker/es";
import './Todo.css';

class Todo extends React.Component {
  constructor() {
    super();
    // стан комонента
    this.state = {
      newInputText: "",
      todos: [],
      startDate: new Date()
    };
    this.inputRef = React.createRef();
  }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  onTextChange = (e) => {
    this.setState({ newInputText: e.target.value, })
  };
  onButtonClick = (e) => {
    e.preventDefault();
    const newInputText = this.state.newInputText;
    const oldTodos = this.state.todos;
    this.setState({
      todos: [...oldTodos, {
        id: oldTodos.length + 1,
        title: newInputText,
        complited: false,
        startDate: this.state.startDate
      }]
    });
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
  };

  onItemCheck = (id) => (e) => {
    const checket = e.target.checked;
    //1 знайти елемент масиву todo
    const carentTodo = this.state.todos.find(todo => todo.id === id);
    //2 поміняти в ньому valye.complite na e.target.checked
    carentTodo.complited = checket;
    // 3 create new array with new todo.it
    const newArray = [];
    this.state.todos.forEach(todo => {
      if (todo.id === id) {
        newArray.push(carentTodo)
      } else {
        newArray.push(todo)
      }
    });
    //4 put new array to state
    this.setState({ todos: newArray })
  };
  /** todo: додати метод onItemRemove за аналогією як (не додавати в new array)*/
  onItemRemove = (id) => (e) => {
    const newArray = [];
    this.state.todos.forEach(todo => {
      if (todo.id !== id) {
        newArray.push(todo)
      }
    });
    // 4 put new array to state
    const newIndexArray = newArray.map((todo, index) => {
      return {
        ...todo,
        id: index + 1
      }
    });
    this.setState({ todos: newIndexArray })
  };

  render() {
    const todos = this.state.todos;
    return (
      <div className="todo">
        <h1> Todo List </h1>
        <div className="button-conteiner">
          <form onSubmit={this.onButtonClick}>
            <input ref={this.inputRef} type={"text"} onChange={this.onTextChange}/>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat={"dd,MM,yyyy"}
            />
            <button className="btn btn-primary" type={"submit"}>
              Add todo
            </button>
          </form>
          <TodoList
            todos={todos}
            onItemCheck={this.onItemCheck}
            onItemRemove={this.onItemRemove}

          >
          </TodoList>
        </div>
      </div>
    );
  }
}

export default Todo;