import React from 'react'
import './Movie.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    return (
        <div>
            <div className='movie'>
                <div className='rent' onClick={props.rentMovie} >{props.isRented ? <RemoveCircleSharpIcon /> : < AddCircleIcon />}</div>
                <Link to={`/movies/${props.movie.id}`}>
                    <img src={props.movie.img} />
                </Link>
            </div>
        </div>
    )
}
