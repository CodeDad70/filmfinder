import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import {getActorMovies} from '../actions/movies'


class ActorCard extends Component {
  
  handleClick = (e) => {
    e.preventDefault();
    const searchValue = this.props.search.id;     
    const data = {      
      searchValue
    }
    console.log(data)
    this.props.getActorMovies(data)
    
  }
  
  render() {

    let knownFor = this.props.search.known_for.map(movie=> <p>{movie.title}</p> )  
    
    return (
      <div key={this.props.search.id} id = {this.props.search.id} className = "MovieCard">
    <div className = "song-card" onClick={this.handleClick} ref = {this.props.search.id}>
      
      <h3> {this.props.search.name} </h3>
      <h3>Best known for: </h3>
      {knownFor}<br/>
      
      <img className="ActorImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.profile_path} alt='Sorry - Image Not Available'/>  
      <p> id = {this.props.search.id} </p>
      </div>
      </div>
      
    )
  }
  
  }
  const mapStateToProps = state => {
    return {
      
      getActorMovies: state.getActorMovies 
    }
  }
  
  export default connect(mapStateToProps, {
    getActorMovies,
  })(ActorCard)