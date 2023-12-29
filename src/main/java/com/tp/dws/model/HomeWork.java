package com.tp.dws.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "homework")
public class HomeWork {

    @Id
    @GeneratedValue
    @Column(name = "homework_id")
    private Long id;

    @Column(nullable = false)
    private String Title;

    @Column(nullable = false)
    private String uploadDate;

    @Column(nullable = false)
    private String activate;

    @Column(nullable = false)
    private String Content;
}
