import React, { useCallback } from "react";
import "./SeatSelector.css";

const seats = Array.from({ length: 25 }, (_, i) => i + 1);

const SeatSelector = ({
  selectedMovie,
  selectedSeats,
  setSelectedSeats,
  onBook,
}) => {
  if (!selectedMovie) {
    return (
      <p className="error-message">
        No movie selected. Please select a movie first.
      </p>
    );
  }

  const toggleSeat = useCallback(
    (seat) => {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    },
    [setSelectedSeats]
  );

  return (
    <div className="seat-selector">
      <h2>Select Seats for {selectedMovie.title}</h2>
      <div className="seats">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      <button
        onClick={onBook}
        disabled={selectedSeats.length === 0}
        className={selectedSeats.length === 0 ? "disabled" : ""}
      >
        Book Now
      </button>
    </div>
  );
};

export default SeatSelector;
