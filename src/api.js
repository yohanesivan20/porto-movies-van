import axios from "axios"

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getPopularMovie = async() => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?page=1&api_key=${apiKey}&language=en-US&page=1&limit=5`
    )
    
    return movie.data.results
}

export const getTrendingMovie = async() => {
    const movie = await axios.get(
        `${baseUrl}/trending/movie/week?page=1&api_key=${apiKey}`
    )

    return movie.data.results
}

export const getSearchMovie = async(searchTerm) => {
    const movie = await axios.get(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1&limit=5`
    )

    return movie.data.results
}

export const getTopRateMovie = async() => {
    const movie = await axios.get(
        `${baseUrl}/movie/top_rated?api_key=${apiKey}`
    )

    return movie.data.results
}