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
    private String uploadTime;

    @Column(nullable = false)
    private String Content;
}
