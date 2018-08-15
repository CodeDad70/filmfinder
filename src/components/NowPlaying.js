import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Redirect } from 'react-router'


let searchParam = "Title"

class MovieSearch extends Component {
  constructor() {
    super()
    this.state = {
      fireRedirectNowPlaying: false,
      
    }
  }  

  

    handleClick = (e) => {
      e.preventDefault();
      this.setState({ fireRedirectMovie: true })
      this.props.getNowPlaying()
    }

    

render() { 

  const { fireRedirectNowPlaying } = this.state
  

return (
<div>
  
 
    <button onClick = {handleClick} >See What's in Theaters</button>
    
   
  

  {fireRedirectNowPlaying && <Redirect to={`/nowplaying`} />}


</div>
);
}
}



export default connect()(NowPlaying)


https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=%3C%3Capi_key%3E%3E"