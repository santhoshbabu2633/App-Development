package com.example.demo.service;

import com.example.demo.model.AdminModel;
import com.example.demo.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public boolean validateLogin(String adminemail, String adminpassword) {
        AdminModel admin = adminRepository.findByAdminemail(adminemail);
        return admin != null && admin.getAdminpassword().equals(adminpassword);
    }
}
