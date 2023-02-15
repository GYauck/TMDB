import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./register.css"



export const Register = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleLastname = (e)=>{
    setLastname(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    axios
    .post("/api/register", {name: name, lastname:lastname,email:email,password:password})
    .then((res)=> res.data)
    .then(()=>{
      navigate("/")
    })
  }
  return (
    

<Container className="form-box h-100 reg-container">
        <Row>
          <Col>
            <h1>User Registration</h1>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <Form onSubmit={handleSubmit} >
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} name="name" placeholder="Your name" onChange={handleName} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastname}  name="lastname" placeholder="Your Lastname" onChange={handleLastname} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} name="email" placeholder="Enter email" onChange={handleEmail} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} name="password" placeholder="Enter your password" onChange={handlePassword} />
              </Form.Group>

              <Button className="reg-button" variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
           
      

      
   
  );
};