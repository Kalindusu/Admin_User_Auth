import React from 'react'
import './Login.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <div className="center-form">
      <h1>Register </h1>
      <form>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
          />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">Register</Button>
      </form>
    </div>
  )
}

export default Register