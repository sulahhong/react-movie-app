
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Movie({ id, coverImg, rating, runtime, description_full, title, summary, genres, movie}) {
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
        </div>
        <Link to={"/"}>BACK</Link>
      </div>
    );
    }

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;