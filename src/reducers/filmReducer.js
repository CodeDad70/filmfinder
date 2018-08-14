const filmReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIE_SUCCESS':
    console.log("inside reducer", action)
      return action.movies;;
    default:
      return state;
  }
}
export default filmReducer;