import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ListBox } from './components/ListBox/ListBox';
import { Navbar } from './components/Navbar/Navbar';
import {Register} from './components/Register/Register';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import {Login} from "./components/Login/Login";
import { UserPanel } from './components/UserPanel/UserPanel';

import { AuthContext } from "./contexts/AuthContext";

const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=5fa59009a2726571edde89a1451ae66c"




export const App = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const {toggleAuth, user} = useContext(AuthContext);

  useEffect(() => {
    axios
    .get(API_URL_POPULAR)
    .then((res)=> res.data)
    .then((movies)=> movies.results)
    .then((results)=> setPopularMovies(results))
  },[])
  
  useEffect(() => {
    axios
    .get("/api/me")
    .then((res)=> {toggleAuth(res.data)})
  },[])

  return (
    <>
    <div className='app-theme'>
    <Navbar setPopularMovies = {setPopularMovies} />
    <Routes>
      <Route path='/' element={<ListBox movies = {popularMovies}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/movie/:id' element={< MovieDetails/>}/>
      <Route path='/user/:id' element={<UserPanel/>}/>
    </Routes>
    </div>
    </>
  )
}
