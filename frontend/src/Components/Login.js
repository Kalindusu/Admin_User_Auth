import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

import "./Login.css";


function Login() {
  const   Navigate=useNavigate();
   
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post("http://localhost:8080/loginUser", data);  

            if (!response.data === "false") {
                alert("Invalid Credentials");
            } else {
                alert("Login Successful"); 
                Navigate("/home");
            }
           
        } catch (error) {
            alert("Something went wrong");
            console.error(error);
        }
    };

    return (
        <div className="center-form">
            <h1>Login From Here</h1>
            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  
                    />
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>
                <br /><br />
                <p>Don't have an account? <a href="/register">Register</a></p>
            </form>
        </div>
    );
}

export default Login;
