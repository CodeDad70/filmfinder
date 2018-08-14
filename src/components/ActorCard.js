import React from 'react';



const ActorCard  = ({search}) => (
  
  
  <div key={search.id} className = "MovieCard">
  
    <div className = "song-card">
    {/* <div style={{ backgroundImage: "http://image.tmdb.org/t/p/w185//" + movie.backdrop_path }} > */}
      {/* <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + movie.poster_path} alt={movie.name} / >   */}
      
      <h3> {search.name} </h3>
      <h3>Best known for: </h3>
      {search.known_for.map(movie=> <p>{search.title}</p> )  }<br/>
      
      <img className="ActorImage" src = {"http://image.tmdb.org/t/p/w300//" + search.profile_path} alt='Sorry - Image Not Available' / >  
      
      </div>
    {/* </div>    */}
  </div>
)

export default ActorCard;



