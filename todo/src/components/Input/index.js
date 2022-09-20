import React, {useState} from "react";
import PropTypes from "prop-types"
import "./style.css"

const Input = ({newTodo}) => {

    const ENTER_KEY = 13;
    const ESC_KEY = 27;

    const [value, setValue] = useState('')

    const clear = () => {
        setValue('')
    }

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
        newTodo(value)
        clear()
        } else if (event.which === ESC_KEY) {
        clear()
        }
    }

    return (
        <div className='input-wraper'>
            <input placeholder='O que você precisa fazer?' value={value} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    )
}

Input.propTypes = {
    newTodo: PropTypes.func.isRequired
}

export default Input