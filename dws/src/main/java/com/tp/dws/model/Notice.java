package com.tp.dws.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "notice")
public class Notice {
	
	@Id
	@Column(name = "notice_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private Long id;
	
	@Column(nullable = false)
	private String author;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false)
	private String content;
	
	@Column(nullable = false)
	private LocalDate createAt;
	
	@Column(nullable = false, columnDefinition = "integer default 0")
	private int view;
	
	@ManyToOne
	@JoinColumn( name = "user_id", nullable = false)
	private User user;

	public Notice() {
		super();
	}

	public Notice(Long id, String author, String title, String content, LocalDate createAt, int view) {
		super();
		this.id = id;
		this.author = author;
		this.title = title;
		this.content = content;
		this.createAt = createAt;
		this.view = view;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public LocalDate getCreateAt() {
		return createAt;
	}

	public void setCreateAt(LocalDate createAt) {
		this.createAt = createAt;
	}

	public int getView() {
		return view;
	}

	public void setView(int view) {
		this.view = view;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
	
}
