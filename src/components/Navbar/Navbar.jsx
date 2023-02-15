import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SearchBox } from "../SearchBox/SearchBox";
import "./navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./navbar.css";

export const Navbar = ({ setPopularMovies }) => {
  const { isAuthenticated, user, toggleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post("/api/logout")
      .then((res) => res.data)
      .then(() => {
        toggleAuth({ user: null, isAuthenticated: false });
        navigate("/");
      });
  };

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>
          <h1>TMDB P5</h1>
        </Link>
        <SearchBox setPopularMovies={setPopularMovies} />

        {isAuthenticated ? (
          <div className="user-button">
            <Link to={`/user/${user?.id}`}>
              <Button className="user-button" variant="primary">
                User Panel
              </Button>{" "}
            </Link>

            <Link to={"/logout"}>
              <Button
                onClick={handleLogout}
                className="logout-button"
                variant="primary"
              >
                Logout
              </Button>{" "}
            </Link>
          </div>
        ) : (
          <div className="log-reg-button">
            <Link className="asd" to={"/login"}>
              <Button className="register-button" variant="primary">
                Login
              </Button>{" "}
            </Link>

            <Link className="asd" to={"/register"}>
              <Button className="register-button" variant="primary">
                Register
              </Button>{" "}
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};
