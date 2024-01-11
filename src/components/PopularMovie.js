import '../css/style.css'
import React, { useEffect, useState } from 'react'
import { getPopularMovie } from "../api"


const PopularMovie = () => {
    const [popularMovies, setPopularMovies] = useState([])
    
    useEffect(() => {
        getPopularMovie().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return (
                //Movie Wrapper
                <div className="bg-stone-900 shadow-lg rounded-lg overflow-hidden" key={i}>
                    <img className="Movie-image w-full" 
                    src={`${process.env.REACT_APP_BASEIMGURL}w500/${movie.poster_path}`}></img>
                    <div className='p-4 text-left'>
                        <div className="Movie-date font-bold text-red-800">{movie.release_date}</div>
                        <div className="Movie-title text-xl text-white font-semibold mb-2">{movie.title}</div>
                        <div className="Movie-rate text-yellow-300 font-bold">
                            Film Rate : {movie.vote_average}
                        </div>
                    </div>    
                </div>
            )
        })
    }

    return (
        //Movie Container
        <div className='bg-slate-900 p-4'>
            <div className='mb-4'>
                <h1 className='text-4xl md:text-6xl font-bold text-white'>Popular Movies</h1>
                <p className='text-lg md:text-xl text-gray-300 mt-4 text-yellow-500'>The most popular Movies in the world</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <PopularMovieList/>
            </div>
        </div>
    )
}

export default PopularMovie;