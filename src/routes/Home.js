import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { useGlobalContext } from "../components/context";
import styles from './Home.module.css';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';



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
                placeholder="select Rating here"
                type="number"
                onChange={onChange}
              />
            
              <input 
                type="text"
                value={genre}
                id='genre'
                placeholder="set genres here"
                onChange={(e) => setGenre(e.target.value)}
               />
            
            
              <input 
                type="text"
                value={query}
                id='query'
                placeholder="search here"
                onChange={(e) => setQuery(e.target.value)}
              />
            <p type="submit" onClick={handleSubmit}><FaSearch /></p>
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
            <p onClick={prevPage}><FaArrowLeft /></p>
            <p><b>{page}</b>  of  <b>{totalPage}</b></p>
            <p onClick={nextPage}><FaArrowRight /></p>
          </div>
            </div>
            )}
    </div>
    );
    }
    
export default Home;