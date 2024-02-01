package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class BookMarkDto {

	@NotBlank
	private String thumbnail;
	
	@NotBlank
	private String title;
	
	@NotBlank
	private String date;
	
	@NotBlank
	private String description;
	
	@NotBlank
	private String url;
	
	private Long vodId;
	
	private Long userId;


	public BookMarkDto() {
		super();
	}


	public BookMarkDto(@NotBlank String thumbnail, @NotBlank String title, @NotBlank String date,
			@NotBlank String description, @NotBlank String url, Long vodId, Long userId) {
		super();
		this.thumbnail = thumbnail;
		this.title = title;
		this.date = date;
		this.description = description;
		this.url = url;
		this.vodId = vodId;
		this.userId = userId;
	}


	public String getThumbnail() {
		return thumbnail;
	}


	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
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


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}


	public Long getVodId() {
		return vodId;
	}


	public void setVodId(Long vodId) {
		this.vodId = vodId;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	

	


	
}
