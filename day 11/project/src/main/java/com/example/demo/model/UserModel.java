package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity

public class UserModel {
	@Id
	@GeneratedValue
	private Long userid;
	private String userfirstname;
	private String userlastname;
	private String useremail;
	private String userpassword;
	private String userrepeatpassword;
	
	public Long getUserid() {
		return userid;
	}
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	public String getUserfirstname() {
		return userfirstname;
	}
	public void setUserfirstname(String userfirstname) {
		this.userfirstname = userfirstname;
	}
	public String getUserlastname() {
		return userlastname;
	}
	public void setUserlastname(String userlastname) {
		this.userlastname = userlastname;
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
	public String getUserrepeatpassword() {
		return userrepeatpassword;
	}
	public void setUserrepeatpassword(String userrepeatpassword) {
		this.userrepeatpassword = userrepeatpassword;
	}
	@Override
	public String toString() {
		return "UserModel [userid=" + userid + ", userfirstname=" + userfirstname + ", userlastname=" + userlastname
				+ ", useremail=" + useremail + ", userpassword=" + userpassword + ", userrepeatpassword="
				+ userrepeatpassword + "]";
	}
	public UserModel(Long userid, String userfirstname, String userlastname, String useremail, String userpassword,
			String userrepeatpassword) {
		super();
		this.userid = userid;
		this.userfirstname = userfirstname;
		this.userlastname = userlastname;
		this.useremail = useremail;
		this.userpassword = userpassword;
		this.userrepeatpassword = userrepeatpassword;
	}
	

	
}
