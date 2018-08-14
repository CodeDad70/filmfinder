import React, {Component} from 'react' ;
import {connect} from 'react-redux';



class ActorCard extends Component {
  
  handleClicker =(e)=> {
    e.preventDefault()
    console.log("clicked !")
  }
  
  render() {

    let knownFor = this.props.search.known_for.map(movie=> <p>{movie.title}</p> )  
    
    return (
      <div key={this.props.search.id} className = "MovieCard">
    <div className = "song-card" onClick={this.handleClicker}>
      
      <h3> {this.props.search.name} </h3>
      <h3>Best known for: </h3>
      {knownFor}<br/>
      
      <img className="ActorImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.profile_path} alt='Sorry - Image Not Available'/>  
      
      </div>
      </div>
      
    )
  }
  
  }


export default ActorCard;
