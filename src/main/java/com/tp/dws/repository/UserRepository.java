package com.tp.dws.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tp.dws.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByLoginId(String loginId);

}
