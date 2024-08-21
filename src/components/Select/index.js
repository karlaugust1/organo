import './Select.css'

const Select = (props) => {

    const onChange = (evento) => {
        props.onChange(evento.target.value)
    }

    return (
        <div className='select-dropdown'>
            <label>{props.label}</label>
            <select onChange={onChange} value={props.value}>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Select;