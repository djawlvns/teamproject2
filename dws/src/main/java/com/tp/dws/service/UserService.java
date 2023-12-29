package com.tp.dws.service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.UserDto;
import com.tp.dws.dto.UserLoginDto;

public interface UserService {

	public BaseResponse<Void> signUp(UserDto memberdto);
	public BaseResponse<Void> login(UserLoginDto memberLoginDto);
}
