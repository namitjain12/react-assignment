// import React, { useEffect, useState } from 'react';

// const API = 'https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=${searchQuery}&page=1&include_adult=false`';

// const Nav = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [query, setQuery]= useState("");
//   const fetchApiData = async (url) => {
//     try {
//       setLoading(true);
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.length > 0) {
//         setUsers(data);
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClick = () => {
//     fetchApiData(API);
//   };
// console.log(query);
//   return (
//     <>
//       <input
//         type="text"
//         className="search"
//         id={query }
//         name="phone"
//         onChange={(e)=> setQuery(e.target.value)}
//       />
//       <button type="button" onClick={handleClick}>
//         Click Me!
//       </button>

//       {loading ? (
//         <p>Loading...</p>
//       ) : users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <>
//             <li key={user.id}>{user.title}</li>
//             <li key={user.id}>{user.title}</li>
//             <li key={user.id}>{user.title}</li>
//             </>
//           ))}
//         </ul>
//       ) : null}
//     </>
//   );
// };

// export default Nav;

