import React from 'react';
import './TodoHeadText.css';

class TodoHeadText extends React.Component {
  constructor() {
    super();
    this.state = {
      todoTextAdd : 'color: red',
    }
  }

  render () {
    const todoTextAd = this.state.todoTextAdd;
    return (
      <div className="TodoHeadText-container">
        <span class = "Page-header-title" style={{color:'#4B0082'}}> <b>Add Todo :</b> </span>
        <span style={{color:'#708090'}}>To add a todo, just fill the form below and click in add todo.</span>
      </div>
    );
  }
}

export default TodoHeadText;