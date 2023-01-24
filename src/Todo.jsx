import React from 'react';

const Todo = ({ todo, key, id, onRemoveTodo }) => {
    const deleteTodo = (id) =>{
        onRemoveTodo(id)
    }
    return (
        
        <div className="singleTodo">
            <div>
            <h2>{ todo.title}</h2>
            <h3>{ todo.category}</h3>
                <p>{todo.desc}</p>
           </div>
             <button onClick={()=>deleteTodo(id)}>Delete</button>
          </div>
  )
}

export default Todo