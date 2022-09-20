import Proptypes from "prop-types"
import Item from "../Item"

const Lista = ({ data, onToggle, onRemove }) => {
    console.log(data)
    return (
        <ul className='todo-list'>
        {
            data.map( (item) => (
                <Item dataItem={item} onToggle={onToggle} onRemove={onRemove} />
            ))
        }
        </ul>
    )
}

Lista.propTypes = {
    data: Proptypes.arrayOf({
        id: Proptypes.number.isRequired,
        title: Proptypes.string.isRequired,
        checked: Proptypes.bool.isRequired
    }).isRequired,
    onToggle: Proptypes.func.isRequired,
    onRemove: Proptypes.func.isRequired
}

export default Lista