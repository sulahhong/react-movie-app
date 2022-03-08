import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useGlobalContext } from "../components/context";
import styles from './Home.module.css';


function Home() {
  const {loading, movies, rating, onChange, prevPage, nextPage } = useGlobalContext()

    return (
      
     <div>
      {loading ? (
          <h1>Loading...</h1>
       ) : (
            <div>
            {/* <div className="search-bar">
             <h2>search here</h2> 
             <input
                className="search-bar"
                value={rating}
                id="rating"
                placeholder="Rating"
                type="number"
                onChange={onChange}
            />
            </div> */}
            
            <section className="boxes">
              <div className="container">
                <div className="box">
                  {movies.map((movie) => (
                    <Movie 
                      key={movie.id}
                      id={movie.id}
                      coverImg={movie.medium_cover_image} 
                      title={movie.title} 
                      // summary={movie.summary}
                      genres={movie.genres}
                      movie={movie}
                      rating={movie.rating}
                      runtime={movie.runtime}
                    />
                    ))}
                  </div>
                </div>
              </section>
          <div className="footerBtn">
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
          </div>
            </div>
            )}
    </div>
    );
    }
    
export default Home;