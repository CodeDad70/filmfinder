import React, { Component } from 'react';

class FilmSearch extends Component {
render() {
return (
<div>
  <h1>Search for a movie</h1>
  <form>
   <input required type="text" placeholder="Enter Movie Title" /><br /><br />
   
   <button>Search</button>
  </form>
</div>
);
}
}
export default FilmSearch;