import{useState, useEffect} from "react";

const Movies= ()=> {
    const[movies, setMovies] = useState([]);

    useEffect(()=> {
        fetch("https://freetestapi.com/api/v1/movies")
        .then ((response)=> response.json())
        .then((data)=> setMovies(data));
   
    },[]);

    return(
        <div className="p-8 bg-grey-100">
          <h1 className=" font-bold text-red-600 text-4xl text-center mb-3">Movies</h1>
          <div className="flex flex-wrap flex-row gap-6">
         {movies.map((movie, index) => (

          
       



<div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[400px] ml-8">
    <a href="#">
        <img class="rounded-t-lg w-full h-64" src={movie.poster} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Director:{movie.director}</p>
        <a href="#" class="inline-flex  px-3 py-2 text-sm font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            story:{movie.plot}
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>


          {/* <p>Title:{movie.title}</p>
          <p>Release Date:{movie.year}</p>
          <p>Genre:{movie.genre}</p>
          <p>Director:{movie.director}</p>
          <p>Rating:{movie.rating}</p> */}

        </div>
      ))}

        </div>
        </div>
    )
}

export default Movies;