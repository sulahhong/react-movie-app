import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Moviedetail.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState } from "react";
import Suggestions from "./Suggestions";

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
  movie, suggestions, cast,
}) {
  const [modal, setModal] = useState(false);

  
 
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // if (language == 'en') {
  //   return language = 'English';
  // } else {
  //   return language;
  // }

  switch (language) {
    case 'ko': language = 'Korean';
      break;
    case 'en': language = 'English';
      break;
  }


  return (
    <section>
      <div className={styles.container}>
        <div>
          <img className={styles.detailimg} src={coverImg} alt={title} />
        </div>
        <div className={styles.info}>
          <h1>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h1>
          {/* <p>{rating && `rating: ${rating}`}</p> */}
          <p>
            <b>rating : </b>
            {rating}
          </p>
          <p>
            <b>runtime :</b> {runtime} min
          </p>
          <p>
            <b>language :</b> {language}
          </p>
          <p>
            <b>mpa rating :</b> {mpa_rating}
          </p>
          <p>
            <b> genres : </b>
            {movie.hasOwnProperty("genres") ? (
              <ul>
                {genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            ) : null}{" "}
          </p>
          
           {movie.hasOwnProperty("cast") ? ( 
             cast.map((actor)=>(<div>{actor.name}</div>))
            ) : null}
            
          <p>
          
            <b>synopsis : </b>
            {description_full}
          </p>

          {/* <button onClick={openModal}>modal</button> */}
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
          <p>
            <b>suggestions : </b>
          </p>
          <div className={styles.suggestion_container}>
            {suggestions.map((suggestion) => (
              <div className={styles.suggestion_one}>
                <a href={`/movie/${suggestion.id}`}>
                  <img
                    src={suggestion.medium_cover_image}
                    alt={suggestion.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* {modal ? (
      <p className={modal ? `${styles.open} ${styles.modalbg}`  : styles.close}>
        <b>synopsis : </b>
        {description_full}
        <button className={styles.closebtn} onClick={closeModal}>
          X
        </button>
      </p>
      ) : null} */}
    </section>
  );
}
// <div className={styles.modalcontainer}>

Moviedetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moviedetail;
