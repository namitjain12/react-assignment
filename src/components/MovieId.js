import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access query parameters
import axios from "axios";

function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("id");

  useEffect(() => {
    // API URL with the dynamically obtained movieId
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c340ce9b56b005a778ba3d8b6eeda525&language=en-US`;

    // Fetch movie data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Extract relevant data from the API response
        const { title, overview, release_date, vote_average } = response.data;

        // Create an object to hold movie details
        const movieDetails = {
          title,
          overview,
          releaseDate: release_date,
          voteAverage: vote_average,
        };

        // Set the movieData state
        setMovieData(movieDetails);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [movieId]); // Include movieId in the dependency array to fetch data when it changes

  return (
    <div>
      {movieData ? (
        <div>
          <h1>Title: {movieData.title}</h1>
          <p>Overview: {movieData.overview}</p>
          <p>Release Date: {movieData.releaseDate}</p>
          <p>Vote Average: {movieData.voteAverage}</p>
        </div>
      ) : (
        <p>Loading movie data...</p>
      )}
    </div>
  );
}

export default MovieDetails;