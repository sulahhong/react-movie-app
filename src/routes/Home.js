import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useGlobalContext } from "../components/context";


function Home() {
  const {loading, movies, rating, onChange } = useGlobalContext()

    return (
      
     <div>
      {loading ? (
          <h1>Loading...</h1>
       ) : (
          <div>
            <div>
             <h1>search here</h1> 
             <input
            value={rating}
            id="rating"
            placeholder="Rating"
            type="number"
            onChange={onChange}
          />
            </div>
            <div></div>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title_long} 
                // summary={movie.summary}
                genres={movie.genres}
                movie={movie}
               />
            ))}
          </div>
        )}
    </div>
    );
    }
    
export default Home;