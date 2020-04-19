import React from 'react';
import './TodoList.css';
import TodoHeader from "./components/TodoHeader/TodoHeader"
import AntCardBody from "./components/AntCardBody/ant-card-body";
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
        <AntCardBody>
        </AntCardBody>
      </div>
    );
  }
}

export default TodoList;
