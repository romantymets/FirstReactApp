import React from 'react';
import './ErrorField.css';

/**
 * Додати текстове поле
 * Коли користувач вводить шось відобразити в параграфі нижче
 * */
class ErrorField extends React.Component {
  constructor() {
    super();
  }

  render () {
    const { value } = this.props;
    return /\d/.test(value) ? (
      <span className="error-message" >
       Please enter only character1s. You entered {value}
      </span>
    ) : null;
  }
}

export default ErrorField;
