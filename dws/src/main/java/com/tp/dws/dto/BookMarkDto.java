package com.tp.dws.dto;

import jakarta.validation.constraints.NotBlank;

public class BookMarkDto {

	@NotBlank
	private String thumbnail;
	
	@NotBlank
	private String title;
	
	@NotBlank
	private String data;
	
	@NotBlank
	private String description;
	
	@NotBlank
	private String url;
	
	@NotBlank
	private Long vodId;
	
	@NotBlank
	private String vodname;
	
	@NotBlank 
	private Long userId;
	
	@NotBlank
	private String name;

	public BookMarkDto() {
		super();
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

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
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

	public String getVodname() {
		return vodname;
	}

	public void setVodname(String vodname) {
		this.vodname = vodname;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
	
	


	
}
