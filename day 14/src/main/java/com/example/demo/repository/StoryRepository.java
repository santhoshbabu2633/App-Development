package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.StoryModel;

@Repository
public interface StoryRepository extends JpaRepository<StoryModel,Long>{

}
