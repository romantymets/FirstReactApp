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
          <ul className="list-group">
            {todos.map((todo) =>
                (<li className="list-group-item" key={todo.id}>
                  <div className="row">
                    <div className="col-1">
                      <input type="checkbox" className="checkbox-container" checked={todo.complited}
                             onChange={onItemCheck(todo.id)}
                      />
                    </div>
                    <div className="col-7">
                      <p  className={`text-cut ${todo.complited ? 'checked-item' : ''}`} >
                        {todo.id}.{todo.title}</p>
                    </div>
                    <div className="col-2">   {moment(todo.startDate).format("DD,MM,YYYY")}   </div>
                    <div className="col-2">
                      <button className="btn btn-danger" onClick={onItemRemove(todo.id)}> Delete</button>
                    </div>
                  </div>
                </li>)
              )}
              </ul>
          </div>
    );
  };
}
export default TodoList;