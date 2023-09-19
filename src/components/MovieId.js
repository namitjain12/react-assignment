import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "./MovieId.css"

function MovieDetails({ movieId }) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US`;

    axios
      .get(apiUrl)
      .then((response) => {
        const {
          title,
          overview,
          release_date,
          vote_average,
          poster_path,
        } = response.data;

        const movieDetails = {
          title,
          overview,
          releaseDate: release_date,
          voteAverage: vote_average,
          posterPath: poster_path, 
        };

        setMovieData(movieDetails);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [movieId]);

  return (
    <div className="movie-details">
      {movieData ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movieData.posterPath}`}
            alt={movieData.title}
            
          />
          <h1 className="movie-title">{movieData.title}</h1>
          <p className="movie-overview">{movieData.overview}</p>
          <p className="movie-release-date">
            Release Date: {movieData.releaseDate}
          </p>
          <p className="movie-vote-average">
            Vote Average: {movieData.voteAverage}
          </p>
        </div>
      ) : (
        <p>Loading movie data...</p>
      )}
    </div>
  );
}

export default MovieDetails;