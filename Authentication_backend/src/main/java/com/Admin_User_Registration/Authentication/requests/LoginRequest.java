package com.Admin_User_Registration.Authentication.requests;

public class LoginRequest {

    private Long id;
    private String password;

    public LoginRequest() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
