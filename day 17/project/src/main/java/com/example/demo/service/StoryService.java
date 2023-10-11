package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StoryModel;
import com.example.demo.repository.StoryRepository;

@Service
public class StoryService {
    @Autowired
    private StoryRepository storyRepository;

    public List<StoryModel> getAllStories() {
        return storyRepository.findAll();
    }

    public void createStory(StoryModel storyModel) {
        storyRepository.save(storyModel);
    }

    public Optional<StoryModel> getStoriesById(Long storyId) {
        return storyRepository.findById(storyId);
    }

    public List<StoryModel> getStoriesByGenre(String genre) {
        return storyRepository.findByGenre(genre);
    }

    public List<StoryModel> getStoriesByAuthor(String author) {
        return storyRepository.findByAuthor(author);
    }

    public StoryModel updateStory(StoryModel storyModel) {
        return storyRepository.save(storyModel);
    }

    public void deleteStoryById(Long storyId) {
        storyRepository.deleteById(storyId);
    }


}
