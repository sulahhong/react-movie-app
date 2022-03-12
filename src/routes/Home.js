import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useGlobalContext } from "../components/context";
import styles from './Home.module.css';
import { FaSearch } from 'react-icons/fa';


function Home() {
  const {
    loading, 
    movies, 
    rating, 
    onChange, 
    prevPage, 
    nextPage, 
    query, 
    setQuery,
    genre,
    setGenre,
    handleSubmit,
    page,
    totalPage
   } = useGlobalContext()

    return (
      
     <div>
      {loading ? (
          <h1>Loading...</h1>
       ) : (
            <div>
             <div className="search-bar"> 
             <h2>search here</h2> 
             <input
                value={rating}
                id="rating"
                placeholder="Rating"
                type="number"
                onChange={onChange}
            />
            <div>
              <input 
                type="text"
                value={genre}
                id='genre'
                placeholder="set genres here"
                onChange={(e) => setGenre(e.target.value)}
                 />
            </div>
            <div>
              <input 
                type="text"
                value={query}
                id='query'
                placeholder="search here"
                onChange={(e) => setQuery(e.target.value)}
                
              />
            </div>
            <button type="submit" onClick={handleSubmit}><FaSearch /></button>
            
            </div> 

           
            
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
            <p>{page} of 
            {totalPage}</p>
            <button onClick={nextPage}>next</button>
          </div>
            </div>
            )}
    </div>
    );
    }
    
export default Home;