package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.StoryModel;

import java.util.List;

@Repository
public interface StoryRepository extends JpaRepository<StoryModel,Long>{

    List<StoryModel> findByGenre(String genre);
    List<StoryModel> findByAuthor(String author);

}
