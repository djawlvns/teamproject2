package com.tp.dws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.NoticeDto;
import com.tp.dws.model.Notice;
import com.tp.dws.service.impl.NoticeServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="http://localhost:3000",
				methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class NoticeController {
	
	private final NoticeServiceImpl noticeServiceImpl;

	@Autowired
	public NoticeController(NoticeServiceImpl noticeServiceImpl) {
		this.noticeServiceImpl = noticeServiceImpl;
	}
	@Secured({"ROLE_ADMIN","ROLE_USER"})
	@PostMapping("/api/notice")
	public ResponseEntity<BaseResponse<Void>> createNotice(@RequestBody @Valid NoticeDto noticeDto) {
		return new ResponseEntity<>(
				noticeServiceImpl.createNotice(noticeDto),
				HttpStatus.CREATED);
	}
	
	@GetMapping("/api/notice")
	public ResponseEntity<BaseResponse<List<Notice>>> getAllNotice(){
		return new ResponseEntity<>(
				noticeServiceImpl.getAllNotice(),
				HttpStatus.OK);
	}
	
	@DeleteMapping("/api/notice/delete/{id}")
	public ResponseEntity<BaseResponse<Long>> deleteNotice(@PathVariable Long id) {
		return new ResponseEntity<>(
				noticeServiceImpl.deleteNotice(id),
				HttpStatus.OK);
	}
	
}
