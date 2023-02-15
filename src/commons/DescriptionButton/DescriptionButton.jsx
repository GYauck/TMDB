import React from "react";
import { Button } from "react-bootstrap";
import "./descriptionButton.css";
import { Link } from "react-router-dom";

export const DescriptionButton = ({ movieId }) => {
  return (
    <div>
      <Link className="divButton" to={`movie/${movieId}`}>
        <Button variant="primary" size="lg">
          More Info.
        </Button>{" "}
      </Link>
    </div>
  );
};
