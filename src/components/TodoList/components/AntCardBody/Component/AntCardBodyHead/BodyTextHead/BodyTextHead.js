import React from 'react';
import './BodyTextHead.css';
// import TodoHeadText from "./TodoHeadText/TodoHeadText";

class BodyTextHead extends React.Component {
  constructor() {
    super();
    this.state = {
      onSelectColorText : '#4B0082',
      color2 : 'white',
    };
    this.onSelectText = this.onSelectText.bind(this);
  }
  onSelectText () {
    this.setState({color2:'black'})
  }
  render () {
    const colorText = this.state.onSelectColorText;
    const bagraund = this.state.color2;
    return (
      <div className="BodyTextHead-container">

        <span
          onSelect={this.onSelectText}
           style={{color:colorText, backgroundColor:bagraund}}>
          <b>Create a new todo</b>
        </span>


      </div>
    );
  }
}

export default BodyTextHead;
