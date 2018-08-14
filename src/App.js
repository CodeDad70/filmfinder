import React from 'react';
import FilmSearch from './containers/FilmSearch'
import MovieDisplay from './components/MovieDisplay'

class App extends React.Component {
  render() { 
    return (

   
  <div className="card-1">
    <h1> Welcome to the FilmFinder</h1>
    
    <FilmSearch/>
    <MovieDisplay/>
  </div>
    )
  }
}


export default App;
