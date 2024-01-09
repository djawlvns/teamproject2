package com.tp.dws.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.UserDto;
import com.tp.dws.dto.UserLoginDto;
import com.tp.dws.service.impl.UserServiceImpl;

import jakarta.servlet.http.HttpServletRequest;
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

	@PostMapping("/signup")
	public ResponseEntity<BaseResponse<UserDto>> signUp(@RequestBody @Valid UserDto userDto) {
		return new ResponseEntity<BaseResponse<UserDto>>(
				userServiceImpl.signUp(userDto),
				HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<BaseResponse<Void>> login(@RequestBody @Valid UserLoginDto userLoginDto) {
		return new ResponseEntity<BaseResponse<Void>>(
				userServiceImpl.login(userLoginDto),
				HttpStatus.OK);
	}
	
    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<BaseResponse<UserDto>> getCurrentUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(new BaseResponse<>(
                        ResultCode.SUCCESS.name(),
                        userServiceImpl.getCurrentUserWithAuthorities(),
                        ResultCode.SUCCESS.getMsg()
        ));
    }
    
    @GetMapping("/checkDuplicateId/{id}")
    public ResponseEntity<BaseResponse<String>> checkDuplicateId(@PathVariable String id) {
        boolean isDuplicate = userServiceImpl.checkIfIdExistsInDatabase(id);
        if (isDuplicate) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(new BaseResponse<>(
                            ResultCode.ERROR.name(),
                            "아이디가 이미 존재합니다.",
                            ResultCode.ERROR.getMsg()
            ));
        }
        return ResponseEntity.ok(new BaseResponse<>(
                        ResultCode.SUCCESS.name(),
                        "사용 가능한 아이디입니다.",
                        ResultCode.SUCCESS.getMsg()
        ));
    }
    
}
