import {FaCaretRight, FaTrash} from "react-icons/fa"
import "./style.css"

const Item = ({ dataItem, onRemove, onToggle }) => {
    return (
        <li className={'todo-item' + (dataItem.checked ? " checked" : "")} key={dataItem.id}>
            <span onClick={ () => onToggle(dataItem) } role="button" tabIndex={0}><FaCaretRight /> {dataItem.title}</span>
            <button type='button' className='todo-delete' onClick={ () => onRemove(dataItem) }>
                <FaTrash size={16} />
            </button>
        </li>
    )
}

export default Item