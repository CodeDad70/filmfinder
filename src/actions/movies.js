const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

//action creators

const setMovie = movies => {
  console.log("inside setMovie", movies)
  return {
    type: 'GET_MOVIE_SUCCESS',
    movies
  }
}

const setActor = actors => {
  console.log("inside setActor", actors)
  return {
    type: 'GET_ACTOR_SUCCESS',
    actors
  }
}



//  -- Async Actions -- 
export const getMovie =  (movie) => {
  console.log("inside getMovie")
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${movie.searchValue}&page=1&include_adult=false`)
    .then(response => response.json())
    
    .then(movies => dispatch(setMovie(movies)))
    .catch(error => console.log(error)); 
    
  }
}

export const getActor =  (actors) => {
    console.log('inside getActor',  actors.searchValue)
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_API_KEY}&language=en-US&query=${actors.searchValue}&page=1&include_adult=false`)
    
    .then(response => response.json())
    .then(actors => dispatch(setActor(actors)))
    .catch(error => console.log(error));  
    
  }
}



