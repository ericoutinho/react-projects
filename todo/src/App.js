import React, {useState} from 'react';
import { FaTrash, FaCaretRight } from "react-icons/fa"

import './App.css';

function App() {

  const ENTER_KEY = 13;
  const ESC_key = 27;

  const startTodos = [
    {id: 1, title: "Estudar", checked: true},
    {id: 2, title: "Pagar boleto", checked: true},
    {id: 3, title: "Dormir", checked: false},
    {id: 4, title: "Emagrecer", checked: false},
  ]

  const [todos, setTodos] = useState(startTodos)
  const [value, setValue] = useState('')

  const clear = () => {
    setValue('')
  }

  const submit = () => {
    setTodos([...todos, {id: new Date().getTime(), title: value, checked: false}])
    clear()
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit()
    } else if (event.which === ESC_key) {
      console.log("ESCAPE")
      clear()
    }
  }

  const onToggle = (item) => {
    setTodos(todos.map((todo)=> (todo.id === item.id ? {...todo, checked: !todo.checked} : todo)))
  }

  const onRemove = (item) => {
    setTodos(todos.filter( (todo) => (todo.id !== item.id) ))
  }

  return (
    <>
      <header>
        <div className="container">
          <h1>Todo</h1>
        </div>
      </header>
      <main>
        <div className="container">

          <div className='input-wraper'>
            <input placeholder='O que você precisa fazer?' value={value} onChange={onChange} onKeyDown={onKeyDown} />
          </div>

          <ul className='todo-list'>
            {
              todos.map( (item, index) => (
                <li className={'todo-item' + (item.checked ? " checked" : "")} key={index}>
                  <span onClick={ () => onToggle(item) } role="button" tabIndex={0}><FaCaretRight /> {item.title}</span>
                  <button type='button' className='todo-delete' onClick={ () => onRemove(item) }>
                    <FaTrash size={16} />
                  </button>
                </li>
              ))
            }
          </ul>

        </div>
      </main>
      <footer>
        <div className="container">
          ericoutinho &copy; { new Date().getFullYear() }
        </div>
      </footer>
    </>
  );
}

export default App;
