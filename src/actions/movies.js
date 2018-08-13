const MOVIE_DB_API_KEY = process.env.MOVIEDB_API_KEY;

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
   
    return fetch(`https://api.themoviedb.org/3/ghostbusters/550?api_key=507b27c76d1cd9905d36d167744d3eca`)
    .then(response => response.json())
    .then(movie => dispatch(setMovie(movie)))
    .catch(error => console.log(error)); 
  }
}
