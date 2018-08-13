const MOVIEDB_API_KEY = process.env.MOVIEDB_API_KEY;

//action creators

const setMovie = movie => {
  return {
    type: 'GET_MOVIE_SUCCESS',
    movie
  }
}



//  -- Async Actions -- 
export const getMovie =  () => {
  return dispatch => {
   
    return fetch(`https://api.themoviedb.org/3/ghostbusters/550?api_key=${this.MOVIEDB_API_KEY}`)
    .then(response => response.json())
    .then(movie => dispatch(setMovie(movie)))
    .catch(error => console.log(error)); 
  }
}
