import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router";

export const SearchBox = ({ setPopularMovies }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5fa59009a2726571edde89a1451ae66c&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setPopularMovies(data.results);
      setQuery("");
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <Form className="d-flex" onSubmit={searchMovie}>
      <FormControl
        type="search"
        placeholder="Movie Search"
        className="me-2"
        aria-label="search"
        name="query"
        value={query}
        onChange={changeHandler}
      ></FormControl>
      <Button onClick={clickHandler} variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};
