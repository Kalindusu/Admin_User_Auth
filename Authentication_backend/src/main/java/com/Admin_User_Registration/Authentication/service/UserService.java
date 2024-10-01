package com.Admin_User_Registration.Authentication.service;

import com.Admin_User_Registration.Authentication.dto.UserDTO;
import com.Admin_User_Registration.Authentication.model.User;
import com.Admin_User_Registration.Authentication.repo.UserRepo;
import com.Admin_User_Registration.Authentication.requests.LoginRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;


    public  UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO,User.class));
        return  userDTO;
    }

    public  Boolean loginUser(LoginRequest loginRequest){
        Optional<User> user= userRepo.findByEmail(loginRequest.getEmail());
        User user1=user.get();

        if(user1==null){
            return false;
        }



        if(!user1.getPassword().equals(loginRequest.getPassword())){
            return  false;
        }

        return  true;





    }
}
