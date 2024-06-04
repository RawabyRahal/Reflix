import React, { useState } from 'react'
import { FaSearch, FaDollarSign } from "react-icons/fa";

import Movie from './Movie'
import './Catalog.css'
export default function Catalog(props) {
    const [search, setSearch] = useState('')

    const filteredMovies = (movies) => {
        return movies.filter(mov => mov.title.toLowerCase().includes(search.toLowerCase()))
    }

    const isRented = (movieId) => props.user.rentedMovies.includes(movieId);

    const rentedMovies = filteredMovies(props.movies.filter(mov => {
        return isRented(mov.id);
    }));

    return (
        <div><br></br><br></br>
            <div className='search-input'>
                <div className='search-icon'><FaSearch /></div>
                <input id="search-input" placeholder="Search movies..." onChange={(e) => setSearch(e.target.value)} value={search} />
            </div><br></br><br></br>
            <div className='budget'><FaDollarSign/>{props.user.budget} Remaining</div><br></br>
            <div>
                {rentedMovies.length > 0 &&
                    <>
                        <div className='text'>Rented Movies:</div>
                        <div className="catalog">
                            {rentedMovies.map((movie) => (
                                <Movie key={movie.id} movie={movie} isRented={true} rentMovie={() => props.rentMovie(movie.id)} />
                            ))}
                        </div>
                    </>
                }
            </div>
            <br></br><br></br>
            <div className='text'>Movies Catalog: </div>
            <div className='catalog'>{filteredMovies(props.movies).map((movie) => (
                <Movie key={movie.id} movie={movie} isRented={isRented(movie.id)} rentMovie={() => props.rentMovie(movie.id)} />
            ))}
            </div>
        </div>
    )
}
