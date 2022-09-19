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

export default Lista