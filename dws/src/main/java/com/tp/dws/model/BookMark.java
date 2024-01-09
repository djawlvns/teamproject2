package com.tp.dws.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="bookmark")
public class BookMark {
	
    @Id
    @GeneratedValue
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


}
