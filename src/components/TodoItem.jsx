import React from 'react'
import { CrossIcon, CheckIcon } from './Svg'

export const TodoItem = ({todo, dispatch}) => {

    const unCheckedBtn = 'grid place-items-center sm:w-6 w-5 h-5 sm:h-6 rounded-full mr-6';
    const bgGradient = 'bg-gradient-to-br from-[#57ddff] to-[#c058f3]';
    const border = 'border hover:border-zinc-700 dark:border-dark-todo-border';
    
    return (
        <div className='flex relative border-b dark:border-dark-todo-border  items-center sm:p-6 p-4 cursor-pointer group'>
            <span onClick={(e) => dispatch({ type: "CHECK_TODO", payload: todo.id})} className={`${unCheckedBtn} ${todo.isChecked ? bgGradient : border }`}>
                {todo.isChecked && <CheckIcon />}
            </span>
            <p className='mt-1 text-light-todo-active sm:text-lg text-sm dark:text-dark-todo-active' style={{textDecoration: todo.isChecked && 'line-through', color: todo.isChecked && '#d2d3db'}}>{todo.text}</p>
            <span onClick={(e) => dispatch({ type: "DELETE_TODO", payload: todo.id})} className='absolute right-6 hidden group-hover:block'>
                <CrossIcon width={18} height={18} color={'#494C6B'} />
            </span>
        </div>
    )
}
