import React from 'react'

export const Footer = ({ todos, dispatch, setToggleMethod, toggleMethod }) => {

  const buttonStyle = 'hover:text-light-todo-active dark:hover:text-dark-footer-btn-hover';


  return (
    <footer className='flex justify-between items-center p-5 sm:text-sm text-xs relative'>
      <p className='w-20 text-light-footer-passive'><span>{todos.todos.filter(todo => !todo.isChecked).length}</span> items left</p>

      <div className='flex gap-4 font-bold sm:static absolute sm:-translate-x-0 -translate-x-1/2 -bottom-12 left-1/2 sm:-translate-y-0 translate-y-1/2 bg-white sm:w-0 w-full justify-center sm:py-0 py-4 sm:px-0 px-20 dark:bg-dark-todo-background'>
        <button onClick={e => setToggleMethod("all")} className={`${buttonStyle} ${toggleMethod == "all" ? "text-blue-700" : "text-light-footer-passive"}`}>All</button>
        <button onClick={e => setToggleMethod("active")} className={`${buttonStyle} ${toggleMethod == "active" ? "text-blue-700" : "text-light-footer-passive"}`}>Active</button>
        <button onClick={e => setToggleMethod("completed")} className={`${buttonStyle} ${toggleMethod == "completed" ? "text-blue-700" : "text-light-footer-passive"}`}>Completed</button>
      </div>

      <button onClick={(e) => dispatch({ type: "CLEAR_COMPLETED_TODO" })} className='hover:text-light-todo-active dark:hover:text-dark-footer-btn-hover text-light-footer-passive'>Clear Completed</button>

    </footer>
  )
}


// className=`hover:text-light-todo-active dark:hover:text-dark-footer-btn-hover ${toggleMethod === "all" ? "text-bright-blue" : "text-light-footer-passive"}`