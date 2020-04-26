import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './TodoList.css'
class Todolist extends React.Component {
  constructor() {
    super();
    {
    }
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
                  {todo.id}.

                         {todo.title}

                </span>

              <button className="btn btn-primary" onClick={onItemRemove(todo.id)}> Delete</button>
            </li>)
          )}
        </ul>
      </div>
    );
  };
}

export default Todolist;

// import T from "../App";
// import PropTypes from 'prop-types'
// import TodoItem from "../Todo/TodoItem";
// const styles = {
//   url: {
//     listStyle: 'none',
//     margin: 0,
//     padding: 0
//   }
// }

// export default function Todolist (props) {
//   return(
//     <ul style={styles.url}>
//       { props.todos.map((todo, index) => {
//        return <TodoItem todo={todo} key={todo.id} index={index + 1}/>
//         })}
//     </ul>
//   )
// }
// export default Todolist;