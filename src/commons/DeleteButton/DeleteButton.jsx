import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

export const DeleteButton = ({ movie, user }) => {
  const deleteFav = (e) => {
    e.preventDefault();

    axios
      .delete(`/api/favourites/${user.id}`, { data: { movieId: movie.id } })
      .then((res) => res.data);
  };

  return (
    <div className="divButton">
      <Button onClick={deleteFav} variant="primary" size="lg">
        Delete Fav
      </Button>{" "}
    </div>
  );
};
