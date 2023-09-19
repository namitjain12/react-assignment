import React, { useState } from "react";
import MovieDetails from "../components/MovieId";
import './SeachBar.css';

export const SearchResultsList = ({ results }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleGetDetails = (id) => {
    setSelectedMovieId(id);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = results.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="parent-class">
    <div className="results-list">
      <div className="parent-class">
        {currentResults.map((result) => (
          <div key={result.id} className="list-item">
                        <div className="grid-container">
              <div className="image-column">
               <img 
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`}
                  alt={result.title}
                 style={{
                    aspectRatio: '1 / 1', 
                     width: '100px', 
                     height: '100px', 
                   }} 
                 />
               </div>
               <div className="details-column">
                 <span className="release-title">{`Title: ${result.title}`}</span>
                 <br />
                 <span className="release-id">{`Voter Id: ${result.id}`}</span>
                 <br />
                 <span className="release-date">{`Release Date: ${result.release_date}`}</span>
                 <br />
                 <button className ="release-button" onClick={() => handleGetDetails(result.id)}>Get Details</button>
               </div>
             </div>

           </div>
         ))}
       </div>
    
        
      <div className="pagination">
        {Array.from({ length: Math.ceil(results.length / itemsPerPage) }).map((_, index) => (
          <button className="pagination-button" key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className="details-movie-details">
        {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
      </div>
    </div>
    </div>
  );
};

// import React, { useState } from "react";
// import MovieDetails from "../components/MovieId";
// import './SeachBar.css';

// export const SearchResultsList = ({ results }) => {
//   const [selectedMovieId, setSelectedMovieId] = useState(null);

//   const handleGetDetails = (id) => {
//     setSelectedMovieId(id);
//   };
//   //  console.log(selectedMovieId)
//   return (
//     <div className="results-list">
//       <div>
//         {results.map((result) => (
//           <div key={result.id} className="list-item">

//             <div className="grid-container">
//               <div className="image-column">
//                 <img 
//                   src={`https://image.tmdb.org/t/p/w220_and_h330_face/${result.poster_path}`}
//                   alt={result.title}
//                   style={{
//                     aspectRatio: '1 / 1', 
//                     width: '100px', 
//                     height: '100px', 
//                   }} 
//                 />
//               </div>
//               <div className="details-column">
//                 <span className="release-title">{`Title: ${result.title}`}</span>
//                 <br />
//                 <span className="release-id">{`Voter Id: ${result.id}`}</span>
//                 <br />
//                 <span className="release-date">{`Release Date: ${result.release_date}`}</span>
//                 <br />
//                 <button className ="release-button" onClick={() => handleGetDetails(result.id)}>Get Details</button>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>
//       <div className="details-movie-details">
//       {selectedMovieId && <MovieDetails movieId={selectedMovieId} />}
//       </div>
//     </div>
//   );
// };