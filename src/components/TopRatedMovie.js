import '../css/style.css'
import React, { useEffect, useState } from 'react'
import { getTopRateMovie  } from '../api'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopRatedMovie = () => {
    const [topRateMovies, setTopRateMovies] = useState([])

    useEffect(() => {
        getTopRateMovie().then((result) => {
            setTopRateMovies(result)
        })
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6, // Show 6 items on larger screens
              },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4, // Show 3 items on smaller screens
                  slidesToScroll: 2,
                },
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2, // Show 3 items on smaller screens
                slidesToScroll: 2,
              },
            },
          ],
    }

    return (
        <div className="bg-dark p-10">
            <div className='bg-white'>
                <div className='pt-4 pl-8 text-left'>
                    <h1 className='text-2xl m-0 font-helvetica'>TOP RATED FILM</h1>
                </div>
                <Slider {...settings}>
                {
                    topRateMovies.map((movie) => (
                        <div className='relative p-4' key={movie.id}>
                            <img className='w-full'
                            src={`${process.env.REACT_APP_BASEIMGURL}w500/${movie.poster_path}`} alt="Slide 1"></img>
                            <div className="text-left">
                                <div className="font-semibold pt-2">{movie.title}</div>
                                <div className="">{movie.release_date}</div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
}

export default TopRatedMovie;