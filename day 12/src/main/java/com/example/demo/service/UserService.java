package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;

@Service
public class UserService {
    private final List<UserModel> users = new ArrayList<>();

    public void create(UserModel userModel) {
     
        users.add(userModel);
    }

    public List<UserModel> getAllUsers() {
        
        return users;
    }
}
