import React from 'react';

const MovieListEntries = (props) => {
  // console.log('MovieListEntries.props = ', props);
 return (
    <li class="list-group-item" >{props.movieTitle}</li>
  );
}

export default MovieListEntries;