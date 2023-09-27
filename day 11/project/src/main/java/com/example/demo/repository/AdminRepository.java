package com.example.demo.repository;

import com.example.demo.model.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<AdminModel, Long> {
    AdminModel findByAdminemail(String adminemail);
}
