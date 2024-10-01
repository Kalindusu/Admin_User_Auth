package com.Admin_User_Registration.Authentication.service;

import com.Admin_User_Registration.Authentication.dto.UserDTO;
import com.Admin_User_Registration.Authentication.model.User;
import com.Admin_User_Registration.Authentication.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public User sava(UserDTO userDTO) {
        return null;
    }

    @Override
    public User save(UserDTO userDTO) {
        User user = new User(userDTO.getEmail(), userDTO.getPassword() , userDTO.getRole(), userDTO.getName());
        return userRepo.save(user);
	}
}
