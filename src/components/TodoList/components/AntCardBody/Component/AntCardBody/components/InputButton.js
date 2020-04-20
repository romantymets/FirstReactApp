import React from 'react';
import './InputButton.css';
import Input  from "./components/Input";
import Button from "./components/Button";
class InputButton extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render () {
    return (
      <div className="InputButton ">
          <Input>

          </Input>
        <Button>

        </Button>
      </div>
    );
  }
}

export default  InputButton ;
