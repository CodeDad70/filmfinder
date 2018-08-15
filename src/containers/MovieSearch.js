import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovie} from '../actions/movies'
import {getActor} from '../actions/movies'
import { Redirect } from 'react-router'
import Select from 'react-select-search'
import ReactSingleDropdown from 'react-single-dropdown'

let searchParam = "Title"

class MovieSearch extends Component {
  constructor() {
    super()
    this.state = {
      fireRedirect: false,
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
          this.setState({ fireRedirect: true })
          this.props.getMovie(data)

        } else if (searchParam === "Actor") {
          this.props.getActor(data)
         } else {return}
        
     
      console.log(data)
    }

    

render() { 

  const { fireRedirect } = this.state

return (
<div>
  <h1>Search for a movie</h1>
  <form onSubmit={this.handleSearch}>
   <input required type="text" ref={(input)=>this.getSearch = input} 
    placeholder="Enter Movie Title" width='300'/>
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
    {fireRedirect && <Redirect to={`/movies`} />}
   
  </form>

  


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