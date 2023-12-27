package com.tp.dws.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tp.dws.model.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
