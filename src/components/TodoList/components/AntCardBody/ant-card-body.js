import React from 'react';
import './ant-card-body.css';
import AntCardBodyHead from "./Component/AntCardBodyHead/AntCardBodyHead";

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

      </div>
    );
  }
}

export default AntCardBody;
