import React from 'react'
import './Login.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const Navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
});

const handleChange = (e) => {
  setRegister({
    ...register,
    [e.target.name]:e.target.value
  })

}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(register);

  try{
      const response = await axios.post('http://localhost:8080/add', register);
      console.log(response.data);
      alert("User added successfully");
      Navigate('/');

 } catch(error){
  console.log(error);

 }
 
}
  return (
    <div className="center-form">
      <h1>Register </h1>
      <form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={register.name}
          onChange={handleChange}
          />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={register.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Register</Button>
      </form>
    </div>
  )
}

export default Register