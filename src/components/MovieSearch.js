import React from 'react';

const MovieSearch = (props) => {

  return (
    <div>
      <form>
        <input type="search" id="site-search" name="q" aria-label="Search Movies..." />
        <button id="movieSearchButton">Go!</button>
      </form>
    </div>
  );
}

export default MovieSearch;