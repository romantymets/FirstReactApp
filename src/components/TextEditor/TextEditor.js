import React from 'react';
import './TextEditor.css';

/**
 * Додати текстове поле
 * Коли користувач вводить шось відобразити в параграфі нижче
 * */
class TextEditor extends React.Component {
  constructor() {
    super();
  }
  render () {

    return (
      <div className="text-editor-container" >
       I a text editor
      </div>
    );
  }
}

export default TextEditor;
