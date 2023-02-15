import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import "./login.css"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {toggleAuth} = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", { email: email, password: password })
      .then((res) => res.data)
      .then((data) => {
        toggleAuth(data);
        navigate("/");
      })
      .catch(()=> alert("Wrong credentials"))
  };
  
  return (
    <Container className="form-box h-100 log-container">
      <Row>
        <Col>
          <h1>Log In</h1>
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                name="email"
                placeholder="Enter email"
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                name="password"
                placeholder="Enter your password"
                onChange={handlePassword}
              />
            </Form.Group>

            <Button className="log-button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
