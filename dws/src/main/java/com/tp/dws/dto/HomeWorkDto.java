package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class HomeWorkDto {

	@NotBlank
	private String title;
	
	@NotBlank
	private String uploadDate;
	
	@NotBlank
	private String activate;
	
	@NotBlank
	private String content;

	public HomeWorkDto() {
		super();
	}

	public HomeWorkDto(@NotBlank String title, @NotBlank String uploadDate, @NotBlank String activate,
			@NotBlank String content) {
		super();
		this.title = title;
		this.uploadDate = uploadDate;
		this.activate = activate;
		this.content = content;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUploadDate() {
		return uploadDate;
	}

	public void setUploadDate(String uploadDate) {
		this.uploadDate = uploadDate;
	}

	public String getActivate() {
		return activate;
	}

	public void setActivate(String activate) {
		this.activate = activate;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	
}
