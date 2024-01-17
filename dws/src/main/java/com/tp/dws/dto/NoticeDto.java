package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class NoticeDto {
	
	@NotBlank
	private String author;
	
	@NotBlank
	private String title;
	
	@NotBlank
	private String content;

	public NoticeDto() {
		super();
	}



	public NoticeDto(@NotBlank String author, @NotBlank String title, @NotBlank String content) {
		super();
		this.author = author;
		this.title = title;
		this.content = content;
	}



	public String getAuthor() {
		return author;
	}



	public void setAuthor(String author) {
		this.author = author;
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

	

	
}
