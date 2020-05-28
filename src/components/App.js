import React from 'react';
import MovieList from './MovieList.js';
import MovieSearch from './MovieSearch.js';
import '../main.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'},
      ]
    }

    // this.movieData = [
    //   {title: 'Mean Girls'},
    //   {title: 'Hackers'},
    //   {title: 'The Grey'},
    //   {title: 'Sunshine'},
    //   {title: 'Ex Machina'},
    // ];
  }

  render(){
    return(
      <div class="container">
      <header class="row">
        <div class="col-sm">
          <h1>MovieList</h1>
        </div>
      </header>
      <div class="row search">
        <div class="col-sm">
          <MovieSearch />
        </div>
      </div>

    <div class="row list-wrapper">
      <div class="col-sm">
        <MovieList movieData={this.state.movies}/>
       </div>
    </div>

    </div>
  )};

}

export default App;
