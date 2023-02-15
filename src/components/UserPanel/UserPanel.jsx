import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./userPanel.css"

const API_IMG = "https://image.tmdb.org/t/p/w500/"

export const UserPanel = () => {

  const {id} = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => { 
    axios
    .get(`/api/user/${id}`)
    .then((res)=> setMovies(res.data))
  },[])

  return (
    <div className='grid-user'>
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <Link to={`/movie/${movie.movieId}`} >
            <img src={API_IMG + movie.poster_path} alt="movies posters" className="imgBox" />
            </Link>
          </div>
        )
      })}
    </div>

  )
}
