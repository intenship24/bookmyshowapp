import React from "react";
import "./MovieList.css";

const MovieList = ({ movies = [], onSelect }) => {
  if (!movies || movies.length === 0) {
    return <p>Loading movies...</p>; // Handle empty state
  }

  return (
    <div className="movie-list">
      <h2>Select a Movie</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onSelect(movie)}>
            {movie.title} - ₹{movie.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
