import React from 'react';
import './Input.css';
// import AntCardBodyHeadDown from "./Component/AntCardBodyHeadDown/AntCardBodyHeadDown";

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="Input">
        <input placeholder="What needs to be done?" type="text"
               style={{width:'100%',
                        height:'100%',}}>
        </input>
      </div>
    );
  }
}

export default  Input;
