package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api")

public class UserController {
	
	@Autowired
	private UserService userService;
	@PostMapping("/create")
	public String create(@RequestBody UserModel userModel)
	{
		userService.create(userModel);
		return "Signup successfully";
	}
	@GetMapping("/getall")
	public  ResponseEntity<List<UserModel>>getAllUsers()
	
	{
		List<UserModel>getUsers=userService.getAllUsers();
		return new ResponseEntity<>(getUsers,HttpStatus.OK);
		
	}
	

}
