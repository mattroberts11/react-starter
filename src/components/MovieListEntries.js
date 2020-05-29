import React from 'react';

const MovieListEntries = (props) => {
  console.log('MovieListEntries = ', props);
 return (
    <li className="list-group-item" >{props.movieTitle}</li>
  );
}

export default MovieListEntries;