import "./InputText.css"
const InputText = (props) => {
    const placeholder = `${props.placeholder}...`

    const onChange = (evento) => {
        props.onChange(evento.target.value)
    }

    return (
        <div className="input-text">
            <label>{ props.label }</label>
            <input onChange={onChange} required={props.required} placeholder={placeholder}/>
        </div>
    )
}

export default InputText