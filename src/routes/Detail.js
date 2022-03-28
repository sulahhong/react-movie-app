import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moviedetail from "../components/Moviedetail";
import Navbar from "../components/Navbar";
// import Home from "../routes/Home";
import { SpinningCircles } from 'react-loading-icons'

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [suggestions, setSuggestions] = useState([]);


    const goHome = () => getMovie();

    const getMovie = async () => {
    const json = await (
       await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)).json();
    console.log(json)
     setMovie(json.data.movie);
  

    }

    const getSuggestions = async () => {
      const json2 = await ( await fetch (`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)).json();
      console.log(json2)
      setSuggestions(json2.data.movies);
     console.log(suggestions[0])


     
    }
// https://yts.mx/api/v2/movie_details.json?movie_id=15&with_images=true&with_cast=true
 

    useEffect(() => {
       getMovie();
       setLoading(false);
       getSuggestions();
    }, []);

    

    return (
      <div>
       {
          loading
          ? (<h1 className="loading"><SpinningCircles /></h1>)
          :
          (<div>
            { 
              <Moviedetail
                key={movie.id}
                id={movie.id}
                coverImg={movie.large_cover_image}
                rating={movie.rating}
                runtime={movie.runtime}
                summary={movie.summary}
                title={movie.title}
                genres={movie.genres}
                movie={movie}
                cast={movie.cast}
                description_full={movie.description_full}
                language={movie.language}
                mpa_rating={movie.mpa_rating} 
                yt={movie.yt_trailer_code}
                suggestions={suggestions}
                />
              }
            
          </div>)
        } 
      </div>
    )
}
export default Detail;