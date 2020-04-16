import React from 'react';
import './TodoList.css';
import TodoHeader from "./components/TodoHeader/TodoHeader"
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="todo-list-container">

        <TodoHeader>

        </TodoHeader>
      </div>
    );
  }
}

export default TodoList;
