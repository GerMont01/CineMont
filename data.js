// API key and URLS ------------------------------------------------------
const api_key = 'c90096fb1d3ef652886f7ca5bb8516c3';
const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
const url2 = 'https://api.themoviedb.org/3/movie/460465/videos?api_key=c90096fb1d3ef652886f7ca5bb8516c3&language=en-US'
const posterUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_face';

// Fetch movies --------------------------------------------------------------------------
async function fetchMoviesJSON() {
    try {
        const response = await fetch(`${url}${api_key}`);
        const movies = await response.json();
        return movies; 
    }
    catch(err){
        console.log(`We have some error ${err}`);
    }
}

// Fetch movie trailer by ID -----------------------------------------------------------------------
async function fetchTrailer(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`);
        const video = await response.json();
        return video.results[0].key; 
    }
    catch(err){
        console.log(`We have some error ${err}`);
    }
}

// Fetch movie info by id -----------------------------------------------------------------------
async function fetchMovie(movieID) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}&language=en-US`)
        const movie = await response.json();
        return movie; 
    }
    catch(err){
        console.log(`We have some error ${err}`);
    }
}