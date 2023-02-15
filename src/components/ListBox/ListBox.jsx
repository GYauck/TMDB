import React from "react";
import { DescriptionButton } from "../../commons/DescriptionButton/DescriptionButton";
import "./listBox.css"

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const ListBox = ({ movies }) => {


  return (
    <div className="grid-list">
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            <img src={API_IMG + movie.poster_path} alt="movies posters" className="imgBox" />
            <DescriptionButton movieId={movie.id}/>
          </div>
        );
      })}
    </div>
  );
};
