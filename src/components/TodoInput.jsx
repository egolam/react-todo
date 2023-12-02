import React, { useRef } from 'react'

export const TodoInput = ({ dispatch }) => {

  const todoRef = useRef();


  function addTodo(e) {

    e.preventDefault();

    if (todoRef.current.value !== "") {
      dispatch({ type: "ADD_TODO", payload: todoRef.current.value });
      todoRef.current.value = "";
    }
  }

  return (
    <form onSubmit={(e) => addTodo(e)} className='w-full sm:h-16 h-12 bg-white dark:bg-dark-todo-background rounded flex items-center sm:p-6 mt-6 p-4'>
      <span className='sm:w-6 sm:h-6 h-5 w-5 rounded-full border dark:border-dark-todo-border'></span>
      <input ref={todoRef} type="text" className='mt-1 ml-6 outline-none sm:text-lg text-xs dark:bg-dark-todo-background text-dark-todo-border dark:text-dark-todo-active' placeholder='Create a new todo...' />
    </form>
  )
}