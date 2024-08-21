import './User.css'

const User = ({ name, image, position, backgroundColor }) => {
    return (<div className='user'>
        <div className='image-header' style={{backgroundColor}}>
            <img src={image} alt={name}/>
        </div>
        <div className='image-footer'>
            <h4>{name}</h4>
            <h5>{position}</h5>
        </div>
    </div>)
}

export default User