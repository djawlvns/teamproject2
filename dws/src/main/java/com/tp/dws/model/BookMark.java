package com.tp.dws.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name ="bookmark")
public class BookMark {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bookmark_id")
    private Long id;
    
    @Column(nullable = false)
    private String thumbnail;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "vod_id", nullable = false)
    private Vod vod;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

	public BookMark() {
		super();
	}



	public BookMark(Long id, String thumbnail, String title, String date, String description, Vod vod, User user) {
		super();
		this.id = id;
		this.thumbnail = thumbnail;
		this.title = title;
		this.date = date;
		this.description = description;
		this.vod = vod;
		this.user = user;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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



	public Vod getVod() {
		return vod;
	}



	public void setVod(Vod vod) {
		this.vod = vod;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}

	
    
    

}
