
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Moviedetail.module.css';
import Navbar from "./Navbar";


function Moviedetail(
  {id, coverImg, rating, runtime, description_full, title, summary, genres, language, yt, mpa_rating, movie}) {
  
  console.log(yt)

    return (
      
      <div className={styles.container}>
        <div className={styles.mainimg} >
        <img src={coverImg} alt={title} />
        </div>
        <div className={styles.mainbox}>
        <h2 className={styles.maindetail}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div className={styles.mainbox}>
          <p>{rating && `rating: ${rating}`}</p>
          <p>{runtime && `runtime: ${runtime} (min)`}</p>
        </div>
        <div className={styles.mainbox}>
        <b>{summary && `<summary>`}</b>
        <p>{summary}</p>
        </div>
        <div className={styles.mainbox}>
          <b>{description_full && `<description>`}</b>
          <p>{description_full}</p>
        </div>
        <div className={styles.mainbox}>
          <b>{genres && `<genres>`}</b>
          {movie.hasOwnProperty("genres") ? (<ul>{genres.map((g)=>(<li key={g}>{g}</li>))}</ul>) : null}
        <div className={styles.mainbox}>
          <p>{language && `language: ${language}`}</p>
          <p>{mpa_rating && `mpa rating: ${mpa_rating}`}</p>
        </div>
          <div className={styles.ytlink}>
          <a href={`https://www.youtube.com/watch?v=${yt}`}>watch movie trailer</a>
        </div>
        </div>
        <div className={styles.backbtn}>
        <Link to={"/"}>BACK</Link>
        </div>
        </div>
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