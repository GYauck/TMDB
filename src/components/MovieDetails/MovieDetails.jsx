import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./movieDetails.css";
import { FavouritesButton } from "../../commons/FavouritesButton/FavouritesButton";
import { DeleteButton } from "../../commons/DeleteButton/DeleteButton";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const MovieDetails = () => {
  const params = useParams();
  const id = JSON.stringify(parseInt(params.id));
  const MOVIE_ID_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=5fa59009a2726571edde89a1451ae66c&language=en-US`;
  const CAST_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5fa59009a2726571edde89a1451ae66c&language=en-US`;

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(MOVIE_ID_URL).then((res) => setMovie(res.data));
  }, []);

  useEffect(() => {
    axios.get(CAST_URL).then((res) => setCast(res.data.cast));
  }, []);

  useEffect(() => {
    axios.get("/api/me").then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      <Container>
        <div className="poster-div">
          <img src={API_IMG + movie.poster_path} alt="imagePreview" />
        </div>
        <div>
          <ul>
            <li>Release Date: {movie.release_date}</li>
            <li>
              Cast: {cast.slice(0, 5).map((obj, index) => obj.name + ", ")}
            </li>
            <li className="info">{movie.overview}</li>
          </ul>
        </div>
        {user.id && <FavouritesButton movie={movie} user={user} />}
        {user.id && <DeleteButton movie={movie} user={user} />}
      </Container>
    </div>
  );
};
