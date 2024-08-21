import './Forms.css';
import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';
import { useState } from 'react';

const Forms = ({ onSave, teams }) => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const save = (event) => {
        event.preventDefault()
        onSave({
            name,
            position,
            image,
            team
        })

        setName('')
        setPosition('')
        setImage('')
        setTeam(teams[0])
    }

    return (
        <section className='forms'>
            <form onSubmit={save}>
                <h2>Fill the data to create the employee card:</h2>
                <InputText value={name} onChange={value => setName(value)} required={true} label="Name" placeholder="Type your name" />
                <InputText value={position} onChange={value => setPosition(value)} required={true} label="Position" placeholder="Type your position" />
                <InputText value={image} onChange={value => setImage(value)} required={true} label="Image" placeholder="Upload your picture" />
                <Select value={team} onChange={value => setTeam(value)} items={teams} />
                <Button>Save</Button>
            </form>
        </section>
    )
}

export default Forms