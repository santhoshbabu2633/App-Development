package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.StoryModel;
import com.example.demo.service.StoryService;

@RestController
@RequestMapping("/api/story")
public class StoryController {
    @Autowired
    private StoryService storyService;

    @PostMapping("/createstory")
    public String createStory(@RequestBody StoryModel storyModel) {
        storyService.createStory(storyModel);
        return "story created";
    }

    @GetMapping
    public ResponseEntity<List<StoryModel>> getAllStories() {
        List<StoryModel> getStories = storyService.getAllStories();
        return new ResponseEntity<>(getStories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StoryModel> getStoriesById(@PathVariable long id) {
        Optional<StoryModel> storyModel = storyService.getStoriesById(id);
        return storyModel.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<StoryModel> updateStory(@PathVariable Long id, @RequestBody StoryModel storyModel) {
        Optional<StoryModel> existingStory = storyService.getStoriesById(id);
        if (existingStory.isPresent()) {
            storyModel.setStoryid(id);
            StoryModel updatedStory = storyService.updateStory(storyModel);
            return new ResponseEntity<>(updatedStory, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
}
