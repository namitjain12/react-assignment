import React from "react";
import { Link}  from "react-router-dom"; // Import Link for navigation

export const SearchResultsList = ({ results }) => {
  console.log(results);
  return (
    <div className="results-list">
      {results.map((result) => (
        <div key={result.id}>
          <p>{`Title: ${result.title}`}</p>
          <p>{result.id}</p>
          <p>{result.release_date}</p>
          {/* Pass the movie ID as a query parameter when the button is clicked */}
          <Link to={`/movie-details?id=${result.id}`}>
            <button className="">Get Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};