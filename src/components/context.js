import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState(1);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [query, setQuery] = useState('');
    const [genre, setGenre] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchForm, setSearchForm] = useState({
      rating: 7,
      genre: 'ALL'
    })
    
    const url1 = `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year&page=${page}&query_term=${query}&genre=${genre}`
    

    const onChange = (event) => { setRating(event.target.value)};
    const getMovies = async () => {
        const json = await ( await fetch (url1)).json();
        setMovies(json.data.movies);
        setLoading(false);

        
    let movieCount = json.data.movie_count
    let x = Math.ceil(movieCount / json.data.limit)
    setTotalPage(x)
    

    };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
    }
  
  
  console.log(page)
  console.log(totalPage)

  const prevPage = () => {
    setPage((oldPage) => {
    let prevPage = oldPage -1
     if (prevPage < 1) {
        prevPage = totalPage
    }
    return prevPage;
     })
    
  }

  const nextPage= () => {
    setPage((oldPage) => {
      let nextPage = oldPage +1
        if (nextPage > totalPage) {
            nextPage = 1  
            
        }
      return nextPage;
    })
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }


    useEffect(() => {
        getMovies();
    }, [rating, page, genre]);

return (
   <AppContext.Provider 
      value={{ 
          loading, 
          movies, 
          rating, 
          onChange,
          page, 
          totalPage,
          setPage, 
          prevPage, 
          nextPage, 
          query,
          setQuery,
          genre,
          setGenre,
          handleSubmit,
          isModalOpen,
          openModal,
          closeModal,
          searchForm,
          setSearchForm,
          
          }}>
       {children}
   </AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }