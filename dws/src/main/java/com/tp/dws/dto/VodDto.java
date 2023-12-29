package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class VodDto {

	@NotBlank
	private String title;
	
	@NotBlank
	private String uploadTime;
	
	@NotBlank
	private String content;

	public VodDto() {
		super();
	}

	public VodDto(@NotBlank String title, @NotBlank String uploadTime, @NotBlank String content) {
		super();
		this.title = title;
		this.uploadTime = uploadTime;
		this.content = content;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUploadTime() {
		return uploadTime;
	}

	public void setUploadTime(String uploadTime) {
		this.uploadTime = uploadTime;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	
}
