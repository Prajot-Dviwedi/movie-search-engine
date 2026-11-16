import "../css/Favorites.css"
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../context/MovieContext'

export const Favorites = () => {
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div className='favorites-empty'>
                <h2>No favorite movies yet</h2>
                <p>Add movies to your favorites and they'll show up here</p>
            </div>
        )
    }

    return (
        <div className='favorites'>
            <h2>Your Favorites</h2>
            <div className='movies-grid'>
                {favorites.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    )
}

export default Favorites;
