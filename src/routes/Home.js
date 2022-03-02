import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useGlobalContext } from "../components/context";


function Home() {

  const {loading, movies, rating, onChange } = useGlobalContext()
    // const [loading, setLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const [rating, setRating] = useState(7);//this
    // const onChange = (event) =>{setRating(event.target.value);};//this
    // const getMovies = async () => {
    // const json = await (await fetch(

    //     )
    //   ).json(); 
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // };
    // useEffect(() => {
    //  getMovies();
    // }, [rating]);
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
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title_long} 
                summary={movie.summary}
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