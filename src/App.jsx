import { useState, useReducer, useEffect } from "react"
import { Header } from "./components/Header"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {

  const todoReducer = (state, action) => {

    switch (action.type) {

      case 'ADD_TODO':
        return {
          todos: [...state.todos, { id: Date.now(), text: action.payload, isChecked: false }]
        }
      case 'CHECK_TODO':
        return {
          todos: state.todos.map(todo => action.payload === todo.id ? { ...todo, isChecked: !todo.isChecked } : todo)
        }

      case 'DELETE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload)
        }

      case 'CLEAR_COMPLETED_TODO':
        return {
          todos: state.todos.filter(todo => !todo.isChecked)
        }

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todoCount: 0
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(darkMode === true){
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode);
  }

  return (
    <>
      <main className="flex flex-col items-center w-full h-screen bg-[url('./assets/bg-mobile-light.jpg')] sm:bg-[url('./assets/bg-desktop-light.jpg')] bg-no-repeat bg-top bg-contain dark:bg-dark-app-background dark:sm:bg-[url('./assets/bg-desktop-dark.jpg')] dark:bg-[url('./assets/bg-mobile-dark.jpg')]">
        <div className="sm:w-[33.75rem] sm:mt-20 w-80 mt-10">
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <TodoInput dispatch={dispatch} />
          <TodoList todos={state} dispatch={dispatch} />
        </div>
      </main>
    </>
  )
}

export default App
