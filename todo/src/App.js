import React, {useState} from 'react';

import './App.css';
import Lista from "./components/Lista"
import Input from "./components/Input"

function App() {

    const ENTER_KEY = 13;
    const ESC_key = 27;

    const startTodos = [
        {id: 1, title: "Estudar React.js", checked: true},
        {id: 2, title: "Pagar boleto", checked: true},
        {id: 3, title: "Dormir cedo", checked: false},
        {id: 4, title: "Emagrecer uns quilinhos", checked: false}
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

                <Input value={value} onChange={onChange} onKeyDown={onKeyDown} />

                <Lista data={todos} onToggle={onToggle} onRemove={onRemove} />

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