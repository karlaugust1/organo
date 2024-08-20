import './Forms.css';
import InputText from '../InputText';
import Select from '../Select';
import Button from '../Button';
import { useState } from 'react';

const Forms = (props) => {
    const teams = [
        'Dev',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
    ]

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const save = (event) => {
        event.preventDefault()
        props.onSave({
            name,
            role,
            image,
            team
        })
    }

    return (
        <section className='forms'>
            <form onSubmit={save}>
                <h2>Fill the data to create the employee card:</h2>
                <InputText onChange={valor => setName(valor)} required={true} label="Name" placeholder="Type your name" />
                <InputText onChange={valor => setRole(valor)} required={true} label="Position" placeholder="Type your position" />
                <InputText onChange={valor => setImage(valor)} required={true} label="Image" placeholder="Upload your picture" />
                <Select onChange={valor => setTeam(valor)} items={teams} />
                <Button>Save</Button>
            </form>
        </section>
    )
}

export default Forms