import React from 'react';
import DatePicker from "react-datepicker/es";
import {SketchPicker} from 'react-color'
import _ from 'lodash'
import TodoList from "../TodoList/TodoList";
import './Todo.css';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      newInputText: "",
      todos: [],
      startDate: new Date(),
      displayColorPicker: false,
      background: '#fff',
    };
    this.inputRef = React.createRef();
  }
  componentWillMount() {
    console.log('----->componentWillMount')
  }
  componentDidMount() {
    console.log('----->didmount')
    this.inputRef.current.focus();
  }
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

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
        startDate: this.state.startDate,
        background: this.state.background,
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
  // onItemRemove = (id) => (e) => {
  //   const newArray = [];
  //   this.state.todos.forEach(todo => {
  //     if (todo.id !== id) {
  //       newArray.push(todo)
  //     }
  //   });
  //   const newIndexArray = newArray.map((todo, index) => {
  //     return {
  //       ...todo,
  //       id: index + 1
  //     }
  //   });
  //   this.setState({ todos: newIndexArray })
  // };

  onItemRemove = (id) => (e) => {
    const newindex = _.findIndex(this.state.todos,(todo) => todo.id === id);
    const newTodos = [...this.state.todos];
    newTodos.splice(newindex, 1);
    this.setState({ todos: newTodos.map((todo,index) => ({...todo, id:index + 1 }))})
  };
  
  render() {
    const todos = this.state.todos;
    return (
      <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h1 className="card-title"> Todo List </h1>
        <div className="container">
          <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-12">
            <form onSubmit={this.onButtonClick} className="was-validated">
              <div className="list-inline">
                <div className="form-group ">
                  <label>Add Todo</label>
                  <input ref={this.inputRef} type={"text"} onChange={this.onTextChange}
                         className="form-control" required/>
                  <div className="invalid-feedback">
                    Please enter
                  </div>
                </div>
                <div className="form-group ">
                  <label htmlFor="validationCustom02">Check Date</label>
                  <div>
                    <DatePicker
                      className="form-control" id="validationCustom02" required
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      dateFormat={"dd,MM,yyyy"}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationCustom02">Check Color</label>
                  <SketchPicker
                    color={this.state.background}
                    onChangeComplete={this.handleChangeComplete}
                    selected={this.state.background}
                    className="color"
                  />
                </div>
                <button className="btn btn-primary" type={"submit"}>
                  Add todo
                </button>
              </div>
            </form>
          </div>
          </div>
          <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3> Do </h3>
                <TodoList
                  todos={todos.filter(todo => {
                    return !todo.complited
                  })}
                  onItemCheck={this.onItemCheck}
                  onItemRemove={this.onItemRemove}
                >
                </TodoList>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3> Done </h3>
                <TodoList
                  todos={todos.filter(todo => todo.complited)}
                  onItemCheck={this.onItemCheck}
                  onItemRemove={this.onItemRemove}
                >
                </TodoList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Todo;