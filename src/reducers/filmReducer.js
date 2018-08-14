export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIE_SUCCESS':
    console.log("inside reducer", action.movies.results.map(movie=> movie.title))
    
      return action.movies;
    default:
      return state;
  }
}

