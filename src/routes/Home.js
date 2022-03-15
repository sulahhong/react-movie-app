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
             <div className="searchbox"> 
             <h2>search here :</h2> 
             <select
                value={rating}
                id="rating"
                onChange={onChange}>
                  <option value="9">9</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
             </select>

              <select
                value={genre}
                id='genre'
                onChange={(e) => setGenre(e.target.value)}
               >
                 <option value="ALL">ALL</option>
                 <option value="Fantasy">Fantasy</option>
                 <option value="Sci-Fi">Sci-Fi</option>
                 <option value="Crime">Crime</option>
                 <option value="Action">Action</option>
                 <option value="Documentary">Documentary</option>
                 <option value="Comedy">Comedy</option>
                 <option value="Horror">Horror</option>
                 <option value="Thriller">Thriller</option>
                 <option value="Drama">Drama</option>
                 <option value="Mystery">Mystery</option>
                 <option value="History">History</option>
                 <option value="Romance">Romance</option>
                 <option value="Musical">Musical</option>
                 <option value="Music">Music</option>
                 <option value="Family">Family</option>

              </select>
            
              
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