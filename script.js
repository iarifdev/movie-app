const API_URL = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=03bdf16b4915fc5ba1bcc411c8054a54&page=1' 

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?a pi_key03bdf16b4915fc5ba1bcc411c8054a54&query="'

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}
