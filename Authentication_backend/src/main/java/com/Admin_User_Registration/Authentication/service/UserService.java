package com.Admin_User_Registration.Authentication.service;

import com.Admin_User_Registration.Authentication.dto.UserDTO;
import com.Admin_User_Registration.Authentication.model.User;
import com.Admin_User_Registration.Authentication.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
 public UserDTO saveUser(UserDTO userDTO){
     userRepo.save(modelMapper.map(userDTO,User.class));
     return userDTO;

 }
}
