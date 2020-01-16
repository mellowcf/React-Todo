import React from 'react';

const Todo = props => {
  return (
    <div class="listing"
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;