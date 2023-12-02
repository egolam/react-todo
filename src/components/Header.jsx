import React from 'react'
import { MoonIcon, SunIcon } from './Svg';


export const Header = ({ toggleDarkMode, darkMode }) => {
    return (
        <header className='flex w-full justify-between items-center'>
            <h1 className='text-white font-bold sm:text-[2.5rem] text-2xl tracking-[1rem]'>TODO</h1>
            <span onClick={toggleDarkMode} className='cursor-pointer'>
                { darkMode ? <SunIcon height={20} width={20}/> : <MoonIcon height={20} width={20} color={"#FFF"} />}
                
            </span>
        </header>
    )
}
