import { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // Lazy initializer: runs once, synchronously, before first render.
    // No race condition, because there's no separate "load" effect.
    const [favorites, setFavorites] = useState(() => {
        try {
            const storedFavs = localStorage.getItem("favorites");
            return storedFavs ? JSON.parse(storedFavs) : [];
        } catch (err) {
            console.error("Failed to parse favorites from localStorage", err);
            return [];
        }
    });

    // Save to localStorage whenever favorites changes
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.some((movie) => movie.id === movieId);
    };

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContext;