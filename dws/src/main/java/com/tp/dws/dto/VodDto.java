package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class VodDto {

	@NotBlank
	private String title;
	
	@NotBlank
	private String date;
	
	@NotBlank
	private String thumbnail;
	
	@NotBlank
	private String description;

	public VodDto() {
		super();
	}



	public VodDto(@NotBlank String title, @NotBlank String date, @NotBlank String thumbnail,
			@NotBlank String description) {
		super();
		this.title = title;
		this.date = date;
		this.thumbnail = thumbnail;
		this.description = description;
	}



	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public String getThumbnail() {
		return thumbnail;
	}



	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}




	
	
}
