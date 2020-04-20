import React from 'react';
import './BodyTextHeadDown.css';
// import TodoHeadText from "./TodoHeadText/TodoHeadText";

class BodyTextHeadDown extends React.Component {
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
      <div className="BodyTextHeadDown">

        <span
          onSelect={this.onSelectText}
           style={{color:colorText,
                    backgroundColor:bagraund,}}>
          Todo List
        </span>


      </div>
    );
  }
}

export default BodyTextHeadDown;
