import React from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.css'

export default function MovieDetail(props) {
    const { movieId } = useParams()
    const movie = props.movies.find(mov => mov.id == movieId)

    return (
        <div className='movie-card'>
            <h1>{movie.title}</h1>
            <div className='year'>{movie.year}</div>
            <img src={movie.img} />
            <div className='description'>{movie.descrShort}</div>
        </div>
    );
}
