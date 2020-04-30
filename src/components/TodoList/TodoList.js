import React from "react";
import './TodoList.css'

class TodoList extends React.Component {
  constructor() {
    super();
  };
// todo:ТЕКСТ ЗАКРЕСЛЕНИЙ КОЛИ ЧЕКЕД ТЕКСТ ДИКОРЕЙШЕН
//  КОЛИ ЧЕКЕД ТЕКСТ ДИКОРЕЙШЕН
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
                {todo.date.getDate()}.{todo.date.getMonth() + 1}.
                    {todo.date.getFullYear()}   ,    {todo.date.getHours()}.
                    {todo.date.getMinutes()}.{todo.date.getSeconds()}
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