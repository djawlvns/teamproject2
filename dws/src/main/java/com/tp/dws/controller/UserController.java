package com.tp.dws.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.UserDto;
import com.tp.dws.dto.UserLoginDto;
import com.tp.dws.service.impl.UserServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST,
		RequestMethod.DELETE })
public class UserController {

	private final UserServiceImpl userServiceImpl;

	@Autowired
	public UserController(UserServiceImpl userServiceImpl) {
		super();
		this.userServiceImpl = userServiceImpl;
	}

	@PostMapping("/basic/signup")
	public ResponseEntity<BaseResponse<UserDto>> signUp(@RequestBody @Valid UserDto userDto) {
		return new ResponseEntity<BaseResponse<UserDto>>(
				userServiceImpl.signUp(userDto),
				HttpStatus.CREATED);
	}

	@PostMapping("/basic/login")
	public ResponseEntity<BaseResponse<Void>> login(@RequestBody @Valid UserLoginDto userLoginDto) {
		return new ResponseEntity<BaseResponse<Void>>(
				userServiceImpl.login(userLoginDto),
				HttpStatus.OK);
	}
}
