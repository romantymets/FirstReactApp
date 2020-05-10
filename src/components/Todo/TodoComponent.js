import React from 'react';
import DatePicker from "react-datepicker/es";
import TodoList from "../TodoList/TodoList";
import './Todo.css';
class Todo extends React.Component {
  constructor() {
    super();
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
    const carentTodo = this.state.todos.find(todo => todo.id === id);
    carentTodo.complited = checket;
    const newArray = [];
    this.state.todos.forEach(todo => {
      if (todo.id === id) {
        newArray.push(carentTodo)
      } else {
        newArray.push(todo)
      }
    });
    this.setState({ todos: newArray })
  };
  onItemRemove = (id) => (e) => {
    const newArray = [];
    this.state.todos.forEach(todo => {
      if (todo.id !== id) {
        newArray.push(todo)
      }
    });
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
      <div className="conteiner-fluid">
        <h1> Todo List </h1>
        <div className="row" >
        <div className="conteiner">
          <form onSubmit={this.onButtonClick} className="needs-validation" novalidate>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom01">Add Todo</label>
            <input ref={this.inputRef} type={"text"} onChange={this.onTextChange}
                   className="form-control" id="validationCustom01" required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom02">Check Date</label>
                <div className="col-md-12 mb-1">
            <DatePicker className="form-control" id="validationCustom02" required
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat={"dd,MM,yyyy"}
            />
                </div>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
            <button className="btn btn-primary" type={"submit"}>
              Add todo
            </button>
            </div>
          </form>
          </div>
          <div className="container-fluid">
            <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-4 col-lg-6">
              <h2> Do </h2>
          <TodoList
            todos={todos}
            onItemCheck={this.onItemCheck}
            onItemRemove={this.onItemRemove}
          >
          </TodoList>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-4 col-lg-6">
              <h2> Done </h2>
            </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
export default Todo;