package com.tp.dws.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vods")
public class Vod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vod_id")
    private Long id;

    @Column(nullable = false)
    private String Title;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String thumbnail;
    
    @Column(nullable = false)
    private String description;

	public Vod() {
		super();
	}

	public Vod(Long id, String title, String date, String thumbnail, String description) {
		super();
		this.id = id;
		Title = title;
		this.date = date;
		this.thumbnail = thumbnail;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
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
