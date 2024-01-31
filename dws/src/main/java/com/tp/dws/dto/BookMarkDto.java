package com.tp.dws.dto;



import java.util.Set;

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
	
	private Set<VodDto> vodDtoSet;
	
	private Set<UserDto> userDtoSet;


	public BookMarkDto() {
		super();
	}


	public BookMarkDto(@NotBlank String thumbnail, @NotBlank String title, @NotBlank String data,
			@NotBlank String description, @NotBlank String url, Set<VodDto> vodDtoSet, Set<UserDto> userDtoSet) {
		super();
		this.thumbnail = thumbnail;
		this.title = title;
		this.data = data;
		this.description = description;
		this.url = url;
		this.vodDtoSet = vodDtoSet;
		this.userDtoSet = userDtoSet;
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


	public Set<VodDto> getVodDtoSet() {
		return vodDtoSet;
	}


	public void setVodDtoSet(Set<VodDto> vodDtoSet) {
		this.vodDtoSet = vodDtoSet;
	}


	public Set<UserDto> getUserDtoSet() {
		return userDtoSet;
	}


	public void setUserDtoSet(Set<UserDto> userDtoSet) {
		this.userDtoSet = userDtoSet;
	}
	

	


	
}
