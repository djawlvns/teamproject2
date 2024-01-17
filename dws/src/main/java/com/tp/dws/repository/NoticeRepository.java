package com.tp.dws.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tp.dws.model.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

}
