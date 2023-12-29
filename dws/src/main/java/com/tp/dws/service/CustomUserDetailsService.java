package com.tp.dws.service;

import com.tp.dws.exception.InvalidRequestException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.tp.dws.model.User;
import com.tp.dws.repository.UserRepository;

import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
   private final UserRepository userRepository;

   public CustomUserDetailsService(UserRepository userRepository) {
      this.userRepository = userRepository;
   }

   @Override
   @Transactional
   public UserDetails loadUserByUsername(final String loginId) {
      return userRepository.findOneWithAuthoritiesByLoginId(loginId)
         .map(user -> createUser(loginId, user))
         .orElseThrow(() -> new InvalidRequestException(loginId,
        		 loginId + " -> 데이터베이스에서 찾을 수 없습니다."));
   }

   private org.springframework.security.core.userdetails.User createUser(
		   String username, User user) {
      if (!user.isActivated()) {
         throw new RuntimeException(username + " -> 활성화되어 있지 않습니다.");
      }

      List<GrantedAuthority> grantedAuthorities = user.getrRoles().stream()
              .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
              .collect(Collectors.toList());

      return new org.springframework.security.core.userdetails.User(user.getLoginId(),
              user.getPassword(),
              grantedAuthorities);
   }
}