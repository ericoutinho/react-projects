import React, {useState} from 'react';

import './App.css';
import Lista from "./components/Lista"
import Input from "./components/Input"

function App() {

    const startTodos = [
        {id: 1, title: "Estudar React.js", checked: true},
        {id: 2, title: "Pagar boleto", checked: true},
        {id: 3, title: "Dormir cedo", checked: false},
        {id: 4, title: "Emagrecer uns quilinhos", checked: false}
    ]

    const [todos, setTodos] = useState(startTodos)

    const newTodo = (value) => {
        setTodos([...todos, {id: new Date().getTime(), title: value, checked: false}])
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

                <Input newTodo={newTodo} />

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