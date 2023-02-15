import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import "./favouritesButton.css";

export const FavouritesButton = ({ movie, user }) => {
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("/api/favourites", {
        movieId: movie.id,
        userId: user.id,
        title: movie.title,
        poster_path: movie.poster_path,
      })
      .then((res) => res.data);
  };

  return (
    <div className="fav-button">
      <Button onClick={handleClick} variant="primary" size="lg">
        Add to Fav
      </Button>{" "}
    </div>
  );
};
