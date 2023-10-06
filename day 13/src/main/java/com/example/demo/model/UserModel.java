package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
;

@Entity

public class UserModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userid;
	private String username;
	private String useremail;
	private String userpassword;
	public Long getUserid() {
		return userid;
	}


	public UserModel() {
		super();

	}


	public void setUserid(Long userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	public UserModel(Long userid, String username, String useremail, String userpassword) {
		super();
		this.userid = userid;
		this.username = username;
		this.useremail = useremail;
		this.userpassword = userpassword;
	}
	@Override
	public String toString() {
		return "UserModel [userid=" + userid + ", username=" + username + ", useremail=" + useremail + ", userpassword="
				+ userpassword + "]";
	}



}