import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useState } from 'react';

function Login() {
    const [email,setEmailvalue]=useState("")
    const [password,setPasswordValue]=useState("")

    const setEmail=(e)=>{
        setEmailvalue(e.target.value);

    }
    const setPassword=(e)=>{
        setPasswordValue(e.target.value);
    }
    
    const handleSubmit=(e)=>{
        //prevebt default
        e.preventDefault();
        //api call
        console.log(email,password)

    }
  return (
    <div className="center-form">
      <h1>Login From Here </h1>
      <form onSubmit={handleSubmit}>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={setEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={setPassword}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
        <br/><br/>
        <p>Don't have an account ? <a href="/register">Register</a></p>


      </form>
    </div>
  )
}

export default Login