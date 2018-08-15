import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovie} from '../actions/movies'
import {getActor} from '../actions/movies'
import { Redirect } from 'react-router'
import ReactSingleDropdown from 'react-single-dropdown'

let searchParam = "Title"

class MovieSearch extends Component {
  constructor() {
    super()
    this.state = {
      
      fireRedirectMovie: false,
      fireRedirectActor: false,
    }
  }  

  

  onDropdownSelect = (value) => {
    console.log('Selected value=', value)
    searchParam = value
    console.log(searchParam)
  }

    handleSearch = (e) => {
      e.preventDefault();
      const searchValue = this.getSearch.value;     
      const data = {
        id: new Date(),
        searchValue

      }

      if ( searchParam ==="Title") {
          this.setState({ fireRedirectMovie: true })
          this.props.getMovie(data)
          

        } else if (searchParam === "Actor") {
          this.setState({ fireRedirectActor: true })
          this.props.getActor(data)
         
         } 
        
         searchParam = "Title"   
      console.log(data)
    }

    

render() { 

  const { fireRedirectMovie } = this.state
  const { fireRedirectActor } = this.state

return (
<div>
  <h1>Search for a movie</h1>
  <form onSubmit={this.handleSearch}>
   <input  required type="text" ref={(input)=>this.getSearch = input} 
    placeholder="Enter a Movie, Actor, or Director" />
   <br /><br />

   <div>
      <ReactSingleDropdown 
      defaultSelected = 'Title'
      onSelect={this.onDropdownSelect}
      noAnimation
      options={['Title','Actor','Director']}
      width='100'/>
    </div>

    <button>Search</button>
    
   
  </form>

  {fireRedirectMovie && <Redirect to={`/movies`} />}
    {fireRedirectActor && <Redirect to={`/actor`} />}


</div>
);
}
}


const mapStateToProps = state => {
  return {
    getMovie: state.getMovie,
    getActor: state.getActor 
  }
}

export default connect(mapStateToProps, {
  getMovie,getActor,
})(MovieSearch)