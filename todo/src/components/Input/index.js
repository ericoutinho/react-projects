import "./style.css"

const Input = ({value, onKeyDown, onChange}) => {

    return (
        <div className='input-wraper'>
            <input placeholder='O que você precisa fazer?' value={value} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    )
}

export default Input