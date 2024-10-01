package com.Admin_User_Registration.Authentication.service;

import com.Admin_User_Registration.Authentication.dto.UserDTO;
import com.Admin_User_Registration.Authentication.model.User;

public interface UserService {
    User save(UserDTO userDTO);
}
