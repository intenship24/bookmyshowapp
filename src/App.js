import "./styles.css";
import React from "react";
import Home from "./components/Home";
import MovieList from "./components/MovieList";
import SeatSelector from "./components/SeatSelector";

export default function App() {
  return (
    <div className="App">
      <Home />
      <MovieList />
      <SeatSelector />
    </div>
  );
}
