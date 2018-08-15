import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import ActorsMovieCard from './ActorsMovieCard'

let renderActorsMovies

class ActorsMoviesDisplay extends Component {
  

  render() {
    
      if(this.props.actormovies.filmReducer.cast) {
        renderActorsMovies = this.props.actormovies.filmReducer.cast.map(function(search){ 
            console.log("Inside ActorsMoviesDisplay", search)
           
          return  <div><ActorsMovieCard  key={search.id}  search={search} /></div>
            
          })   
      }

    return (
      <div>
      
      
        {renderActorsMovies}

      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      actormovies: state
    })
  }
  
  export default connect(mapStateToProps)(ActorsMoviesDisplay);