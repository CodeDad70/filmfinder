import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieSearch from '../containers/MovieSearch'

let renderNowPlaying

class MovieDisplay extends Component {
  

  render() {
    
      if(this.props.movies.filmReducer.results) {
        renderNowPlaying = this.props.movies.filmReducer.results.map(function(search){ 
          <div key={this.props.search.id} className = "MovieCard">
  
          <div className = "song-card" onClick={this.handleClicker} >
          {/* <div style={{ backgroundImage: "http://image.tmdb.org/t/p/w185//" + movie.backdrop_path }} > */}
            <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} / >  
            <h3> {this.props.search.title} </h3>
            <p> {this.props.search.overview} </p>
            <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.backdrop_path} alt={this.props.search.name} / >  
            </div>
          {/* </div>    */}
            </div>
      })
      }
    return (
      <div>
      <h1>Here are your movies: </h1>
        <MovieSearch/>
      
        {renderNowPlaying}

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