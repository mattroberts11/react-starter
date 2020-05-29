import React from 'react';
import MovieListEntries from './MovieListEntries.js';

const MovieList = (props) => {
  // functional methods don't have a rendor method or any of the lifecycle methods
  // console.log('MovieList.props = ', props);
    return (
      <ul className="list-group">
        {
          props.movieData.map((movie, index) =>
            <MovieListEntries movieTitle={movie.title} key={index} />
          )
        }
      </ul>
    )
}

export default MovieList;