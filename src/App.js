import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieSearch from './containers/MovieSearch'
import MovieDisplay from './components/MovieDisplay'
import ActorsMoviesDisplay from './components/ActorsMoviesDisplay'
import './stylesheets/App.css';

class App extends React.Component {
  render() { 
    return (

   <Router>
  <div className="card-1">
    <h1> Welcome to the FilmFinder</h1>
    
    <MovieSearch/>
    <Route exact path="/actorsmovies" component={ActorsMoviesDisplay} />
    <Route exact path="/movies" component={MovieDisplay} />
    <Route exact path="/actor" component={MovieDisplay} />
  
  </div>
  </Router>
    )
  }
}


export default App;
