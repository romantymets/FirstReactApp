import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Todolist extends React.Component {
  constructor() {
    super();
    {
    }
  };

  render () {

    return (
      <div className="ul-container" >
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