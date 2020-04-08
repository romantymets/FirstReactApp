import React from 'react';
import ErrorField from "./components/ErrorField/ErrorField";

import './TextEditor.css';

/**
 * Додати текстове поле
 * Коли користувач вводить шось відобразити в параграфі нижче
 * */
class TextEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      colortextArea : '',
      colorText: 'black',
      text: "",
      isMouseOver:false,
    }
    this.onTextChange = this.onTextChange.bind(this);
    this.onMouseOverTextArea = this.onMouseOverTextArea.bind(this);
  }
  onTextChange (e) {
    const inputtext = e.target.value;
    this.setState({text:inputtext});
  }
  onMouseOverTextArea () {
    this.setState({isMouseOver: true})
    console.log('-----> on onMouseOverButton', );
  }
  onMouseLeaveTextArea = () => {
    this.setState({isMouseOver: false})
  };
  render () {
const colorArea = this.state.colortextArea;
const text = this.state.text;

    const isMouseOver = this.state.isMouseOver;
    return (
      <div className="text-editor-container" >
        <textarea
          style={{backgroundColor : colorArea}}
          onChange={this.onTextChange}
          onMouseLeave={this.onMouseLeaveTextArea}
          onMouseOver={this.onMouseOverTextArea}
          className={isMouseOver ? "text-editor-container1" : "text-editor-container"}
        />
        <p> {text} </p>
        <ErrorField
          value={this.state.text}
        ></ErrorField>
      </div>
    );
  }
}

export default TextEditor;
