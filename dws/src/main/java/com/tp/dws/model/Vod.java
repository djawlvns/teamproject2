package com.tp.dws.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "vods")
public class Vod {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vod_id")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String thumbnail;
    
    @Column(nullable = false)
    private String description;
    
    @Column(nullable = false)
    private String url;
    
    @ManyToMany
    @JoinTable(name = "vod_bookmark", joinColumns = {
    		@JoinColumn(name = "vod_id", referencedColumnName = "vod_id")
    }, inverseJoinColumns = {@JoinColumn(name = "bookmark_id", referencedColumnName = "bookmark_id")})
    private Set<BookMark> bookmark;
    
	public Vod() {
		super();
	}

	public Vod(Long id, String title, String date, String thumbnail, String description, String url) {
		super();
		this.id = id;
		this.title = title;
		this.date = date;
		this.thumbnail = thumbnail;
		this.description = description;
		this.url = url;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Set<BookMark> getBookMark(){
		return bookmark;
	}

	public void setBookmark(Set<BookMark> bookmark) {
		this.bookmark= bookmark;
	}


    
}
