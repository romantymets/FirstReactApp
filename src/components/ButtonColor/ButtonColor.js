import React from 'react';
import { ChromePicker } from 'react-color'
import './ButtonColor.css';
class ButtonColor extends React.Component {
  constructor() {
    super();
    this.state = {
      displayColorPicker: false,
    };
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {

    return (
      <div>
        <button onClick={ this.handleClick }>Pick Color</button>
        { this.state.displayColorPicker ? <div className="popover" >
          <div  className="cover" onClick={ this.handleClose }/>
          <ChromePicker />
        </div> : null }
      </div>
    )
  }
}

export default ButtonColor;