import React from 'react';
import MovieSearch from './containers/MovieSearch'
import MovieDisplay from './components/MovieDisplay'
import './stylesheets/App.css';

class App extends React.Component {
  render() { 
    return (

   
  <div className="card-1">
    <h1> Welcome to the FilmFinder</h1>
    
    <MovieSearch/>
    <MovieDisplay/>
  </div>
    )
  }
}


export default App;
