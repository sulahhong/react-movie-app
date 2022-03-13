import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moviedetail from "../components/Moviedetail";
import Navbar from "../components/Navbar";
// import Home from "../routes/Home";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const goHome = () => getMovie();
    const getMovie = async () => {
    const json = await (
       await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
     setMovie(json.data.movie);
    }

    useEffect(() => {
       getMovie();
       setLoading(false);
    }, []);

    console.log(movie)

    return (
      <div>
       {
          loading
          ? <h1>Loading...</h1>
          :
          <div>
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
                description_full={movie.description_full}
                language={movie.language}
                mpa_rating={movie.mpa_rating} 
                yt={movie.yt_trailer_code}/>
              }
            
          </div>
        } 
      </div>
    )
}
export default Detail;