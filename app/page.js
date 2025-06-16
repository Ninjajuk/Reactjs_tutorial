'use client'
import Image from "next/image";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";


export default function Home() {


  return (
    <>

          <Navbar/>
    <main className="flex min-h-screen  items-center justify-center">
      <div className=" bg-white w-full max-w-md h-[14rem] rounded-md shadow-lg">
           <h1 className="py-2 text-center text-lg font-semibold">React Js</h1>
      </div>
   

    </main>


    </>

  );
}

// 'use client'
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [search, setSearch] = useState('');
//   const [showsuggestion, setShowsuggestion] = useState(false);
//   const [cities, setCities] = useState([]);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const cache = {};



//   const fetchUsers = async (search) => {
//     try {

//         const response = await fetch( `https://dummyjson.com/users/search?q=${search}`); 
//         const data = await response.json();
//        console.log(data.users)
//    setCities(data.users)
      
//     } catch (error) {
//       setError('Failed to fetch User');
//     }
//   };






//   const highlightText = (text, highlight) => {
//     const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
//     return (
//       <span>
//         {parts.map((part, index) =>
//           part.toLowerCase() === highlight.toLowerCase() ? (
//             <span key={index} className="bg-yellow-200">
//               {part}
//             </span>
//           ) : (
//             part
//           )
//         )}
//       </span>
//     );
//   };

//   const handleInputChange = (e) => {
//     setShowsuggestion(true);
//     setSearch(e.target.value);

//     fetchUsers(search)


//   };

//   const handleSelect = (item) => {
//     setSearch(item.name);
//     setShowsuggestion(false);
//   };
//   console.log('Suggetion render')
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>React Js</h1>
//       <div className="relative w-64 h-48 mx-auto ">
//         <input
//           type="text"
//           placeholder="From City"
//           value={search}
//           onChange={handleInputChange}
//           required
//           className="h-12 p-2 w-full border-2 border-gray-600 rounded-md shadow-md focus:outline-none focus:border-green-800"
//         />
//         {loading && (
//           <div className="absolute top-12 w-full bg-white rounded-md shadow-md flex justify-center items-center h-40">
//             <span>Loading...</span>
//           </div>
//         )}
//         {error && (
//           <div className="absolute top-12 w-full bg-white rounded-md shadow-md flex justify-center items-center h-40">
//             <span>{error}</span>
//           </div>
//         )}
//         {showsuggestion && !loading && !error && (
//           <div className="absolute top-12 w-full h-40 bg-white rounded-md shadow-md overflow-y-auto">
//             <ul className="w-full px-4 py-2">
//               {cities.map((item, index) => (
//                 <li
//                   key={index}
//                   onClick={() => handleSelect(item)}
//                   className="w-48 px-4 py-1 hover:bg-gray-200 rounded-md cursor-pointer"
//                 >
//                   {item.firstName}
//                   {/* {highlightText(item, search)} */}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

