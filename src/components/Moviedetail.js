
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Moviedetail(
  {id, coverImg, rating, runtime, description_full, title, summary, genres, language, yt, mpa_rating, movie}) {
  
  console.log(yt)

    return (
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div>
          <p>{rating && `rating: ${rating}`}</p>
          <p>{runtime && `runtime: ${runtime} (min)`}</p>
        </div>
        <div>
        <b>{summary && `<summary>`}</b>
        <p>{summary}</p>
        </div>
        <div>
          <b>{description_full && `<description>`}</b>
          <p>{description_full}</p>
        </div>
        <div>
          <b>{genres && `<genres>`}</b>
          {movie.hasOwnProperty("genres") ? (<ul>{genres.map((g)=>(<li key={g}>{g}</li>))}</ul>) : null}
        <div>
          <p>{language && `language: ${language}`}</p>
        </div>
        <div>
          <p>{mpa_rating && `mpa rating: ${mpa_rating}`}</p>
        </div>
        <div>
          <a href={`https://www.youtube.com/watch?v=${yt}`}>watch movie trailer</a>
        </div>
        </div>
        <Link to={"/"}>BACK</Link>
      </div>
    );
    }

Moviedetail.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moviedetail;