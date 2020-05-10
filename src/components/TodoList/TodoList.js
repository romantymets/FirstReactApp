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
        <div className="container-fluid">
        <ul  className="list-group">
          {todos.map((todo) =>
            (<li className="list-group-item"  key={todo.id}>
                <span className={`${todo.complited ? 'checked-item' : ''}`} >
                     <input type="checkbox" className="checkbox-container" checked={todo.complited}
                            onChange={onItemCheck(todo.id)}
                     />
                  {todo.id}.
                 {todo.title}
                  </span>
                    {moment(todo.startDate).format("DD,MM,YYYY")}
                <button  className="btn btn-danger" onClick={onItemRemove(todo.id)}> Delete</button>
            </li>)
          )}
        </ul>
          </div>
    );
  };
}
export default TodoList;