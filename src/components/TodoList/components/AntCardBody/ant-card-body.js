import React from 'react';
import './ant-card-body.css';
import AntCardBodyHead from "./Component/AntCardBodyHead/AntCardBodyHead";
import InputBodyConteiner from "./Component/AntCardBody/InputButonConteiner";

class AntCardBody extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="AntCardBody-container">
        <AntCardBodyHead>

        </AntCardBodyHead>
        <InputBodyConteiner>

        </InputBodyConteiner>

      </div>
    );
  }
}

export default AntCardBody;
