package com.tp.dws.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "lectures")
public class Lecture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lectures_id")
    private Long id;

    @Column(nullable = false)
    private String Title;

    @Column(nullable = false)
    private String Content;

    @Column(nullable = false)
    private LocalDate startTime;

    @Column(nullable = false)
    private LocalDate endTime;

    public Lecture() {
        super();
    }

    public Lecture(Long id, String Title, String Content, LocalDate startTime, LocalDate endTime) {
        this.id = id;
        this.Title = Title;
        this.Content = Content;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.Title;
    }

    public void setTitle(String Title) {
        this.Title = Title;
    }

    public String getContent() {
        return this.Content;
    }

    public void setContent(String Content) {
        this.Content = Content;
    }

    public LocalDate getStartTime() {
        return this.startTime;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return this.endTime;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }

}
