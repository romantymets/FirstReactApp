import React from 'react';
import './Button.css';
// import AntCardBodyHeadDown from "./Component/AntCardBodyHeadDown/AntCardBodyHeadDown";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="Button">
        <button type="submit"
                style={{width:'100%',
                        height:'100%',
                        color: '#fff',
                        background: '#1890ff',
                        border: '#1890ff'}}>
          <span>Add todo</span>
        </button>
      </div>
    );
  }
}

export default  Button;
