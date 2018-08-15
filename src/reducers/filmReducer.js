const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIE_SUCCESS':
    console.log("inside reducer", action.movies.results.map(movie=> movie.title))
      state= initialState
      return action.movies;
    case 'GET_ACTOR_SUCCESS':
    console.log("inside reducer", action.actors.results.map(actor=> actor.name))
    state= initialState
      return action.actors;
    case 'GET_ACTOR_MOVIES_SUCCESS':
    console.log("inside reducer", action.actormovies.cast)
    state= initialState
      return action.actormovies;  
    default:
      return state;
  }
}

