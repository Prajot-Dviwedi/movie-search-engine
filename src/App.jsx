import { useState } from 'react'
import "./css/App.css";
import MovieCard from './components/MovieCard'
import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </>
  )
}

export default App


