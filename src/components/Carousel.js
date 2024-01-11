import '../css/style.css'
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getTrendingMovie } from '../api';

const Carousel = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-4 z-10 bg-gray-800 text-white rounded-full p-2"
      onClick={onClick}
    >
      &lt;
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute block sm:hidden top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2"
      onClick={onClick}
    >
      &gt;
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };

  const [trendingMovies, setTrendingMovies] = useState([])
    useEffect(() => {
      getTrendingMovie().then((result) => {
        setTrendingMovies(result)
      })
    }, [])
  
  return (
    <div className="w-full max-w-screen mx-auto mt-5">
      <Slider {...settings}>
        {
            trendingMovies.map((movie) => (
                <div className="relative" key={movie.id}>
                  <div className='w-full max-w-screen max-h-screen bg-cover bg-center top-0 left-0 z-0'>
                    <img 
                    src={`${process.env.REACT_APP_BASEIMGURL}original${movie.backdrop_path}`}
                    alt="Slide 1" 
                    className="w-full object-cover" />
                    <div class="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-gray-700 mt-2"></div>
                  </div>

                  {/* Black Overlay */}
                  <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 z-5 mt-2"></div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white w-4/5 md:w-2/5">
                    <h1 className="text-4xl md:text-6xl font-bold">{movie.title}</h1>
                    <div className="hidden md:block lg:block">
                      <p className="text-lg md:text-xl text-gray-300 mt-4">{movie.overview}</p>
                    </div>
                    <ul className='justify-center flex flex-wrap pl-0 mt-5'>
                      <li class="mr-1.5 mt-2 pl-0">
                        <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">Trending</div>
                      </li>
                      <li class="mr-1.5 mt-2 pl-0">
                        <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">{movie.adult ? "Adult" : "Youth"}</div>
                      </li>
                      <li class="mr-1.5 mt-2 pl-0">
                        <div class="items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-medium leading-5 text-stone-100 ">The Movie DB</div>
                      </li>
                    </ul>
                  </div>
                </div>
            ))
        }
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;