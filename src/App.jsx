import Navbar from './components/navbar'
import './App.css'
import { useState, useEffect } from 'react'
import MovieCard from './components/movie_card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const getMovies = async () => {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        const films = await response.json();
        setData(films);
    }

    getMovies();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <hr />
      <div className="movies-grid">
        { data.length == 0 ? <h1>Loading...</h1> : data.map(movie => (
          <MovieCard props={movie} key={movie.id} />
        ))}
      </div>
    </div> 
  )
}

export default App
