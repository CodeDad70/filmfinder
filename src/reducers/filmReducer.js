const filmReducer = (state = [], action) => {
  switch(action.type) {
    case 'SEARCH_FILM':
      return state.concat([action.data]);
    default:
      return state;
  }
}
export default filmReducer;