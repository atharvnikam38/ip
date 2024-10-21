import React, { useState, useEffect } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:5000/movies');
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackClick = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <h1>Static Movie Database</h1>
      {selectedMovie ? (
        <div>
          <h2>{selectedMovie.title}</h2>
          <p><strong>Year:</strong> {selectedMovie.year}</p>
          <p><strong>Genre:</strong> {selectedMovie.genre}</p>
          <p><strong>Description:</strong> {selectedMovie.description}</p>
          <button onClick={handleBackClick}>Back to Movies</button>
        </div>
      ) : (
        <div>
          <h2>Movie List</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => handleMovieClick(movie)}>
                {movie.title} ({movie.year}) - {movie.genre}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
