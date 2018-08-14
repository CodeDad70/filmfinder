import React from 'react';
let imageUrl
const MovieCard  = ({movie}) => (
  
  <div key={movie.id} className = "MovieCard">
  
    <div className = "card card-1">
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + movie.poster_path} alt={movie.name} / >  
      <h3> {movie.title} </h3>
      
      
    </div>   
  </div>
)

export default MovieCard;
