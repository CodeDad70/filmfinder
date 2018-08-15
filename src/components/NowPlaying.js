import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import {getNowPlaying} from '../actions/movies';
import NowPlayingCard from './NowPlayingCard'

let searchParam = "Title"

class NowPlaying extends Component {
  constructor() {
    super()
    this.state = {
      fireRedirectNowPlaying: false,
      
    }
  }  

  

    handleClick = (e) => {
      e.preventDefault();
      this.setState({ fireRedirectNowPlaying: true })
      this.props.getNowPlaying()
    }

    

render() { 

  const { fireRedirectNowPlaying } = this.state
  

return (
<div>
  
 
    <button onClick = {this.handleClick} >See What's in Theaters</button>
    
   
  

  {fireRedirectNowPlaying && <Redirect to={`/nowplaying`} />}


</div>
);
}
}

const mapStateToProps = state => {
  return {
    getNowPlaying: state.getNowPlaying
  }
}

export default connect(mapStateToProps, {
  getNowPlaying
})(NowPlaying)

