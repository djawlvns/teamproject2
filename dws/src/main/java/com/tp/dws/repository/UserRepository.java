package com.tp.dws.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.EntityGraph;

import com.tp.dws.model.User;
// import org.springframework.data.jpa.repository.Query;
// import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByLoginId(String loginId);

	@EntityGraph(attributePaths = "role")
	Optional<User> findOneWithAuthoritiesByLoginId(String loginId);
	
	boolean existsByLoginId(String loginId);

	// 위 메소드와 동일한 메소드 (JPQL 버전)
	// @Query("SELECT u FROM User u JOIN FETCH u.authorities WHERE u.username =
	// :username")
	// Optional<User> findAuthoritiesByUsername(@Param("username") String username);

}
