package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class SchedulesDto {

	@NotBlank
	private String time;
	
	@NotBlank
	private String admin;
	
	private String subject;

	public SchedulesDto() {
		super();
	}



	public SchedulesDto(@NotBlank String time, @NotBlank String admin, String subject) {
		super();
		this.time = time;
		this.admin = admin;
		this.subject = subject;
	}



	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}



	public String getAdmin() {
		return admin;
	}



	public void setAdmin(String admin) {
		this.admin = admin;
	}
	
	
}
