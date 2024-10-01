package com.Admin_User_Registration.Authentication.repo;

import com.Admin_User_Registration.Authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {


}
