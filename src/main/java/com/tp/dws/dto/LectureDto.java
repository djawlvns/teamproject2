package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class LectureDto {
	
	@NotBlank
	private String title;
	
	@NotBlank
	private String  content;
	
	@NotBlank
	private String startTime;
	
	@NotBlank
	private String endTime;

	public LectureDto() {
		super();
	}

	public LectureDto(@NotBlank String title, @NotBlank String content, @NotBlank String startTime,
			@NotBlank String endTime) {
		super();
		this.title = title;
		this.content = content;
		this.startTime = startTime;
		this.endTime = endTime;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	

}
