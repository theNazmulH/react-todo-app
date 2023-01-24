import React, { useState } from 'react';

const Form = (props) => {
    const [todo, setTodo] = useState({
        category: "",
        title: "",
        desc: ""
    })

    const { category, title, desc } = todo;
    
    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        setTodo((prevTodo) => {
            return {
                ...prevTodo,
                [name]: event.target.value
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddTodo(todo)
    }
  return (
    <form method='post' onSubmit={handleSubmit}>
          <div className="single-form">
              <label htmlFor="category"></label>
              <input type="text"
                  placeholder='Category'
                  name='category'
                  id='category'
                  value={category}
                  required
                  onChange={handleChange}
              />
          </div>      
          <div className="single-form">
              <label htmlFor="title"></label>
              <input type="text" placeholder='Title' name='title' id='title'
                  value={title}
                  required
                  onChange={handleChange} />
          </div>       
          <div className="single-form">
              <label htmlFor="desc"></label>
              <input type="text" placeholder='Description' name='desc'
                  value={desc}
                  required
                  id='desc' onChange={handleChange} />
          </div>     
          <div className="single-form">
              <button type="submit" >Add to TODO List</button>
          </div>      
    </form>
  )
}

export default Form