import React from 'react';
import './TodoHeadText.css';

class TodoHeadText extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="TodoHeadText-container">
        <p>Add Todo : To add a todo, just fill the form below and click in add todo.
        </p>
      </div>
    );
  }
}

export default TodoHeadText;