package com.tp.dws.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tp.dws.model.BookMark;

public interface BookMarkRepository extends JpaRepository<BookMark, Long> {

	Optional<BookMark> findByVodIdAndUserId(Long vodId, Long userId);
}
