import React from 'react';
import './TodoHeader.css';
import TodoHeadText from "./TodoHeadText/TodoHeadText";

class TodoHeader extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="TodoHeader-container">
        <TodoHeadText>

        </TodoHeadText>
      </div>
    );
  }
}

export default TodoHeader;
