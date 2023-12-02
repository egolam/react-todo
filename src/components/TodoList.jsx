import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { Footer } from './Footer'

export const TodoList = ({ todos, dispatch }) => {

  const [toggleMethod, setToggleMethod] = useState("all");
  console.log(toggleMethod);


  return (
    <div className='bg-white dark:bg-dark-todo-background w-full sm:mt-6 mt-5 rounded drop-shadow-2xl flex flex-col'>
      {todos.todos.length === 0 ? <div className='text-center h-96 flex flex-col dark:text-dark-todo-active'><h1 className='justify-center items-center my-auto'>There is no to-do in the list!</h1></div> : <>
        {toggleMethod === "all" && todos.todos.map(todo => (<TodoItem key={todo.id} todo={todo} dispatch={dispatch} toggleMethod={toggleMethod} />))}
        {toggleMethod === "active" && todos.todos.filter(todo => !todo.isChecked).map(todo => (<TodoItem key={todo.id} todo={todo} dispatch={dispatch} toggleMethod={toggleMethod} />))}
        {toggleMethod === "completed" && todos.todos.filter(todo => todo.isChecked).map(todo => (<TodoItem key={todo.id} todo={todo} dispatch={dispatch} toggleMethod={toggleMethod} />))}
        <Footer todos={todos} dispatch={dispatch} setToggleMethod={setToggleMethod} toggleMethod={toggleMethod}/>
      </>}

    </div>
  )
}


