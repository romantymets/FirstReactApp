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
                (<li className="list-group-item " key={todo.id}  style={ {background:`${todo.background}`}}>
                  <div className="row">
                    <div className="col-2">
                        <label className="btn btn-primary active" >
                          <svg className="bi bi-check" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                               xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                                  clip-rule="evenodd"/>
                          </svg>
                      <input type="checkbox" className="checkbox-container" checked={todo.complited}
                             onChange={onItemCheck(todo.id)}>
                      </input>
                        </label>

                    </div>
                    <div className="col-6">
                      <p  className={`text-cut ${todo.complited ? 'checked-item' : ''}`} >
                        {todo.id}.{todo.title}</p>
                    </div>
                    <div className="col-2">   {moment(todo.startDate).format("DD,MM,YYYY")}   </div>
                    <div className="col-1">
                      <button className="btn btn-danger" onClick={onItemRemove(todo.id)}> Delete</button>
                      // new chenge
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