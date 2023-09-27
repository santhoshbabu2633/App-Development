package com.example.demo.service;

import com.example.demo.model.AdminModel;

public interface AdminService {
    boolean validateLogin(String adminemail, String adminpassword);
}
