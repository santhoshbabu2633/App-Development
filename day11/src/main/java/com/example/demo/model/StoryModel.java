package com.example.demo.model;

import java.util.Arrays;

import jakarta.persistence.*;

import lombok.*;

@Entity

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString 
public class StoryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long storyid;
    
    private String storytitle;
    
  
	@Lob
    @Column(columnDefinition = "MEDIUMTEXT")
    private String content;
    
    private String author;
    private String genre;
    private byte[] storyphoto;
	public Long getStoryid() {
		return storyid;
	}
	public void setStoryid(Long storyid) {
		this.storyid = storyid;
	}
	public String getStorytitle() {
		return storytitle;
	}
	public void setStorytitle(String storytitle) {
		this.storytitle = storytitle;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public byte[] getStoryphoto() {
		return storyphoto;
	}
	public void setStoryphoto(byte[] storyphoto) {
		this.storyphoto = storyphoto;
	}
	  public StoryModel(Long storyid, String storytitle, String content, String author, String genre, byte[] storyphoto) {
			super();
			this.storyid = storyid;
			this.storytitle = storytitle;
			this.content = content;
			this.author = author;
			this.genre = genre;
			this.storyphoto = storyphoto;
		}
	@Override
	public String toString() {
		return "StoryModel [storyid=" + storyid + ", storytitle=" + storytitle + ", content=" + content + ", author="
				+ author + ", genre=" + genre + ", storyphoto=" + Arrays.toString(storyphoto) + "]";
	}
    
}
