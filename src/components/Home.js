import React, { useState } from "react";
import MovieList from "../components/MovieList";
import SeatSelector from "../components/SeatSelector";

const moviesData = [
  { id: 1, title: "Avengers", poster: "https://via.placeholder.com/150" },
  { id: 2, title: "Inception", poster: "https://via.placeholder.com/150" },
];

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="home-container">
      <MovieList movies={moviesData} onSelect={setSelectedMovie} />
      {selectedMovie && (
        <SeatSelector
          selectedMovie={selectedMovie}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      )}
    </div>
  );
};

export default Home;
