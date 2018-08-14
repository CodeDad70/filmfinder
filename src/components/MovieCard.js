import React from 'react';

const MovieCard  = ({movie}) => (
  <div key={movie.id} className = "MovieCard">
    <div className = "card card-1">
      <h3> {movie.title} </h3>
      
      
    </div>   
  </div>
)

export default MovieCard;