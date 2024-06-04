import { Link } from 'react-router-dom';
import './Landing.css'

export default function Landing(props) {
    return (
        <div>
            <p className='who'>WHO'S WATCHING?</p>
            <div className='container'>
                {props.users.map((user) => (
                    <Link to="/catalog">
                        <div className='box' onClick={() => props.selectUser(user.id)} >
                            <div className='user-name'>{user.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
