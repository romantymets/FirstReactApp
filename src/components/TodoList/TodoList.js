import React from "react";
import moment from "moment";
import './TodoList.css'
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  };
  render() {
    const { todos, onItemCheck,onItemRemove } = this.props
    return (
      <div className="ul-container">
        <ul className="ul-container">
          {todos.map((todo) =>
            (<li className="li-conteiner"  key={todo.id}>
                <span className={`${todo.complited ? 'checked-item' : ''}`} >
                     <input type="checkbox" className="checkbox-container" checked={todo.complited}
                            onChange={onItemCheck(todo.id)}
                     />
                  {todo.id}. {todo.title}
                  <span className="date-conteiner">
                    {moment(todo.startDate).format("DD,MM,YYYY")}
                </span>
                  </span>
              <button className="btn btn-primary" onClick={onItemRemove(todo.id)}> Delete</button>
            </li>)
          )}
        </ul>
      </div>
    );
  };
}
export default TodoList;