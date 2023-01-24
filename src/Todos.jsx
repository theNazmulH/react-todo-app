import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, onRemoveTodo }) => {
    console.log(todos);

  return (
      <div>
          {todos.map(todo => (<Todo
            onRemoveTodo={onRemoveTodo}
        todo={todo.todo}
            key={todo.id}
            id={todo.id}
        />))}
          
      </div>
  )
}

export default Todos