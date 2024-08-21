import User from '../User'
import './Team.css'

const Team = ({ name, users, secondaryColor, primaryColor }) => {
    const css = { backgroundColor: secondaryColor }

    return (
        (users.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: primaryColor }}>{name}</h3>
            <div className='users'>
                {users.map(user => <User name={user.name} position={user.position} image={user.image} backgroundColor={primaryColor} key={user.name}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Team