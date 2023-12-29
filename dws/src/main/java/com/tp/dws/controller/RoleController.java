package com.tp.dws.controller;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.TokenDto;
import com.tp.dws.dto.UserLoginDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.jwt.JwtFilter;
import com.tp.dws.jwt.TokenProvider;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:3000",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class RoleController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public RoleController(TokenProvider tokenProvider, 
    		AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<BaseResponse<TokenDto>> authorize(@RequestBody @Valid UserLoginDto userloginDto) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userloginDto.getLoginId(), 
                		userloginDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject()
        		.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(
                new BaseResponse<>(ResultCode.SUCCESS.name(), new TokenDto(jwt), ResultCode.SUCCESS.getMsg()),
                httpHeaders,
                HttpStatus.OK);
    }
}