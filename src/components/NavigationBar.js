import '../css/style.css'
import React, { useState, useEffect } from 'react'
import { getSearchMovie } from '../api'

const NavigationBar = () => {
    let links = [
        {name:"HOME",url:"#home"},
        {name:"POPULAR",url:"#popular"},
        {name:"TOP RATED",url:"#top-rated"},
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        if (searchTerm.trim() !== '') {
          searchMovies();
        } else {
          setShowResults(false); // Sembunyikan hasil pencarian jika input kosong
        }
      }, [searchTerm]);

    const searchMovies = async () => {
        try {
            console.log(searchTerm.length)
            if(searchTerm.length > 3) {
            const response = await getSearchMovie(searchTerm)
            setMovies(response)
            setShowResults(true);      
            console.log(response)  
            }
        }
        catch(error) {
            console.error('Error fetching data: ', error)
        }
    }

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <nav className="bg-dark py-4 shadow-md w-full fixed top-0 left-0 z-10">
            <div className="container mx-auto flex items-center justify-between">
                {/* Brand Logo */}
                <div className="flex lg:flex lg:items-center">
                    <span className="text-white text-lg font-semibold ml-2">VAN MOVIES</span>
                </div>
                {/* Hamburger Menu */}
                <div className="block lg:hidden">
                    <button
                    onClick={toggleMobileMenu}
                    className="text-white focus:outline-none"
                    >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M4 6h16M4 12h16m-7 6h7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                    </button>
                </div>
                {/* Navigation Links */}
                <div className="hidden lg:flex lg:items-center lg:w-auto" id="navbar-menu">
                    <ul className="hidden lg:flex items-center space-x-4 mb-0 mr-10">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="text-white hover:text-blue no-underline font-helvetica">{link.name}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Search Bar */}
                    <div className="relative ml-10">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                            className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {showResults && (
                            <div className="absolute left-0 right-0 max-h-40 overflow-y-auto bg-gray-800 border border-gray-300 rounded-md mt-1 z-10 shadow-md">
                            {/* Tampilkan hasil pencarian */}
                                <ul className='p-0 text-left text-white'>
                                    {movies.map((movie, i) => (
                                    <li className='border-b pl-4 pr-4 pt-2 hover:bg-gray-700 transition-colors duration-300 rounded-md font-medium cursor-pointer'
                                    key={movie.id}>
                                        {movie.title}
                                        <p className='text-yellow-500 text-sm mt-1 font-helvetica'>Release : {movie.release_date}</p>
                                    </li>
                                    // Anda dapat menampilkan detail film lainnya jika diperlukan
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button className="absolute inset-y-0 right-0 px-4">
                            {/* Search Icon (you can use an SVG or an icon library here) */}
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 12H4"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 7l5 5-5 5"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-gray-800 mt-3">
                    <ul className="mt-2 pt-4 pb-4 px-2">
                        {links.map((link) => (
                            <li key={link.name} className='mb-2'>
                                <a href={link.url} className="text-white hover:text-blue no-underline font-helvetica">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default NavigationBar;