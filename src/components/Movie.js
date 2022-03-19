
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import styles from './Movie.module.css';

function Movie({
  id,
  coverImg,
  rating,
  runtime,
  description_full,
  title,
  summary,
  genres,
  movie,
}) {
  return (
    <div className={styles.bbox}>
    <div className={styles.bbox2}>
    <Link to={`/movie/${id}`} className={styles.title}>
      <img src={coverImg} alt={title} />
      <p>view detail</p></Link>
    </div>
      
      <div className={styles.homeinfo}>
        <h2>
          <Link to={`/movie/${id}`} className={styles.title}>
            {title}
          </Link>
        </h2>
        <p>{rating && `rating: ${rating}`}</p>
        <p>{runtime && `runtime: ${runtime} (min)`}</p>
        {/* <p>
          <b>{genres && `genres`}</b>
        </p> */}
        {movie.hasOwnProperty("genres") ? (
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        ) : null}
      </div>
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