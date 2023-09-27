package com.example.demo.controller;

import com.example.demo.model.AdminModel;
import com.example.demo.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody AdminModel adminModel) {
        // Validate the login
        boolean loggedIn = validateLogin(adminModel.getAdminemail(), adminModel.getAdminpassword());

        if (loggedIn) {
            return "Login successful";
        } else {
            return "Login failed";
        }
    }

    @GetMapping("/{adminiid}")
    public AdminModel getAdminDetails(@PathVariable Long adminiid) {
    
        return adminRepository.findById(adminiid).orElse(null);
    }

    private boolean validateLogin(String adminemail, String adminpassword) {
        AdminModel admin = adminRepository.findByAdminemail(adminemail);
        return admin != null && admin.getAdminpassword().equals(adminpassword);
    }
}
