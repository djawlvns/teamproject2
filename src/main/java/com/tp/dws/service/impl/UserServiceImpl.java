package com.tp.dws.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.UserLoginDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.UserDto;
import com.tp.dws.enumstatus.Gender;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.User;
import com.tp.dws.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserServiceImpl {

	private final UserRepository memberRepository;

	@Autowired
	public UserServiceImpl(UserRepository memberRepository) {
		super();
		this.memberRepository = memberRepository;
	}
	

	public BaseResponse<Void> signUp(UserDto memberDto) {
		User member = memberRepository.findByLoginId(memberDto.getLoginId());
		if (member != null) {
			throw new InvalidRequestException("Duplicate ID", "이미 등록된 ID입니다");
		}
		member = new User();
		member.setId(null);
		member.setLoginId(memberDto.getLoginId());
		member.setBirthDate(LocalDate.parse(memberDto.getBirthDate(), DateTimeFormatter.ofPattern("yyyy-MM-dd")));
		member.setEmail(memberDto.getEmail());
		member.setGender(Gender.valueOf(memberDto.getGender()));
		member.setName(memberDto.getName());
		member.setPassword(memberDto.getPassword());
		
		memberRepository.save(member);
		return new BaseResponse<Void>(
				"SUCCESS",
				null,
				"회원가입이 완료되었습니다.");
	}
	
	public BaseResponse<Void> login(UserLoginDto memberLoginDto) {
		User member = memberRepository.findByLoginId(memberLoginDto.getLoginId());
		if (member != null && 
			member.getPassword().matches(memberLoginDto.getPassword()))
			{
			
				return 	new BaseResponse<Void>(
						ResultCode.SUCCESS.name(),
						null,
						"로그인이 성공했습니다.");
			}
			else
			{
				throw new InvalidRequestException("false","로그인에 실패했습니다.");
			}
		}
	
}
