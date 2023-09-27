package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminModel {
	
	@Id
	@GeneratedValue
	private Long adminiid;
    private String adminemail;
	private String adminpassword;
	public Long getAdminiid() {
		return adminiid;
	}
	public void setAdminiid(Long adminiid) {
		this.adminiid = adminiid;
	}
	public String getAdminemail() {
		return adminemail;
	}
	public void setAdminemail(String adminemail) {
		this.adminemail = adminemail;
	}
	public String getAdminpassword() {
		return adminpassword;
	}
	public void setAdminpassword(String adminpassword) {
		this.adminpassword = adminpassword;
	}
	@Override
	public String toString() {
		return "AdminModel [adminiid=" + adminiid + ", adminemail=" + adminemail + ", adminpassword=" + adminpassword
				+ "]";
	}
	public AdminModel(Long adminiid, String adminemail, String adminpassword) {
		super();
		this.adminiid = adminiid;
		this.adminemail = adminemail;
		this.adminpassword = adminpassword;
	}
	

}
