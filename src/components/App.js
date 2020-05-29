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
      ],
      filtered: [],
      value: ''
    }
    this.searchMovies = this.searchMovies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount(){
    this.setState({
      filtered: this.state.movies
    });
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // alert('Search Term was: ' + this.state.value);
    this.searchMovies(this.state.value);
  }

  showAll(e){

    e.preventDefault();
    this.setState({
      movies: this.state.movies
    })
    console.log(this.state.movies);
  }
  searchMovies(searchTerm){

    let currentList = [];
    let newList = [];

    if(searchTerm !== ""){

      currentList = this.state.movies;
      newList = currentList.filter(movie => {

        const lc = movie.title.toLowerCase();
        const filter = searchTerm.toLowerCase();

        return lc.includes(filter);
      })
    } else {
      newList = this.state.movies;
    }
    this.setState({
      movies: newList
    });
  }

  render(){
    return(
      <div className="container">
      <header className="row">
        <div className="col-sm">
          <h1>MovieList</h1>
        </div>
      </header>

      <div className="row search">
        <div className="col-sm">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input type="submit" value="Go!" />
            </form>
          </div>
        </div>
      </div>

      <div className="row list-wrapper">
        <div className="col-sm">
          <MovieList movieData={this.state.movies}/>
        </div>
      </div>

    </div>
  )};

}

export default App;
