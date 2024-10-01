import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";

function Login() {
  return (
    <div className="center-form">
      <h1>Login From Here </h1>
      <form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
          />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login