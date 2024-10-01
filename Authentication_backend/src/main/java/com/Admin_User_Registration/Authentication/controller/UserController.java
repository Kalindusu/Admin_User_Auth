package com.Admin_User_Registration.Authentication.controller;

import com.Admin_User_Registration.Authentication.dto.UserDTO;
import com.Admin_User_Registration.Authentication.model.User;
import com.Admin_User_Registration.Authentication.requests.LoginRequest;
import com.Admin_User_Registration.Authentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:3000/")
    public  UserDTO saveUser (@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    @PostMapping("/loginUser")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Boolean loginUser(@RequestBody LoginRequest loginRequest){
return  userService.loginUser(loginRequest);
    }
    }

