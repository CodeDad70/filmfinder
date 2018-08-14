import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovie} from '../actions/movies'
import MovieDisplay from '../components/MovieDisplay'


class FilmSearch extends Component {
    
    handleSearch = (e) => {
      e.preventDefault();
      const title = this.getTitle.value;     
      const data = {
        id: new Date(),
        title
      }
      this.props.getMovie(data)
      console.log(data)
    }

render() {
return (
<div>
  <h1>Search for a movie</h1>
  <form onSubmit={this.handleSearch}>
   <input required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Movie Title"/>
   <br /><br />
   
   <button>Search</button>
  </form>
</div>
);
}
}


const mapStateToProps = state => {
  return {
    getMovie: state.getMovie 
  }
}

export default connect(mapStateToProps, {
  getMovie,
})(FilmSearch)