import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieCard from './MovieCard'

let renderMovies

class MovieDisplay extends Component {
  render() {
    console.log("Inside MovieDisplay", this.props.movies.filmReducer.results)
      if(this.props.movies.filmReducer.results ){
        renderMovies = 
          this.props.movies.filmReducer.results.map(movie => <MovieCard key={movie.id} movie={movie} />)   
      }
    return (
      <div>
      <h1>Here are your movies: </h1>
      <debugger/>
      
        {renderMovies}
      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      movies: state
    })
  }
  
  export default connect(mapStateToProps)(MovieDisplay);