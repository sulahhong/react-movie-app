import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    
    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState();
    
    const url = `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`

    const onChange = (event) => { setRating(event.target.value)};
    const getMovies = async () => {
        const json = await ( await fetch (url)).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, [rating]);

return (
   <AppContext.Provider value={{ loading, movies, rating, onChange }}>
       {children}
   </AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }