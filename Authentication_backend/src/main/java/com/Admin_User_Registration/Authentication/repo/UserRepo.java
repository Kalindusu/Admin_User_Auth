package com.Admin_User_Registration.Authentication.repo;

import com.Admin_User_Registration.Authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User,Long> {


    Optional<User> findByEmail(String email);
}
