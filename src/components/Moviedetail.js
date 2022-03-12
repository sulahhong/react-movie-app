import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Moviedetail.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";

function Moviedetail({
  id,
  coverImg,
  rating,
  runtime,
  title,
  summary,
  description_full,
  genres,
  language,
  yt,
  mpa_rating,
  movie,
}) {
  console.log(yt);

  return (
    <div className={styles.container}>
      <div className={styles.mainimg}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.mainbox}>
        <h2 className={styles.maindetail}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.mainbox}>
          <p>{rating && `rating: ${rating}`}</p>
          <p>{runtime && `runtime: ${runtime} (min)`}</p>
          <p>{language && `language: ${language}`}</p>
        </div>
        <div className={styles.mainbox}>
          <b>{summary && `<summary>`}</b>
          <p>{summary}</p>
        </div>
        <div className={styles.mainbox}>
          <b>{genres && `genres`}</b>
          {movie.hasOwnProperty("genres") ? (
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          ) : null}
          <div className={styles.mainbox}>
            <p>{mpa_rating && `mpa rating: ${mpa_rating}`}</p>
          </div>
          <div>
            <b>{description_full && `description`}</b>
            <p>{description_full}</p>
          </div>
        </div>

      <div>
        <button className={styles.ytlink}>
          <a href={`https://www.youtube.com/watch?v=${yt}`}>
          
            watch movie trailer
          </a>
        </button>

        <Link to={"/"}>
          <button className={styles.backbtn}>
            <RiArrowGoBackFill className={styles.backbtnicon} />
            BACK
          </button>
        </Link>
        </div>

      </div>
    </div>
  );
}

Moviedetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moviedetail;
