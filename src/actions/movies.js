const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

//action creators

const setMovie = movies => {
  console.log("inside setMovie", movies)
  return {
    type: 'GET_MOVIE_SUCCESS',
    movies
  }
}



//  -- Async Actions -- 
export const getMovie =  (movie) => {
  console.log("API Key ", URL)
  
  console.log("movie sent to api", movie.title) 
  
  
  
  return dispatch => {
    console.log(process.env.REACT_APP_API_KEY)
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${movie.title}&page=1&include_adult=false`)
    .then(response => response.json())
    
    .then(movies => dispatch(setMovie(movies)))
    .catch(error => console.log(error)); 
    
  }
}
