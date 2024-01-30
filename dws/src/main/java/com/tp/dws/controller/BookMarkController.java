package com.tp.dws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.BookMarkDto;
import com.tp.dws.model.BookMark;
import com.tp.dws.service.impl.BookMarkServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="http://localhost:3000",methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class BookMarkController {
	
	private final BookMarkServiceImpl bookmarkServiceImpl;

	@Autowired
	public BookMarkController(BookMarkServiceImpl bookmarkServiceImpl) {
		this.bookmarkServiceImpl = bookmarkServiceImpl;
	}
	
	@PostMapping("/api/bookmark")
	public ResponseEntity<BaseResponse<Void>> createBookMark(@RequestBody @Valid BookMarkDto bookmarkDto) {
		return new ResponseEntity<> (
				bookmarkServiceImpl.createBookMark(bookmarkDto),
				HttpStatus.CREATED
				);
	}
	
	@GetMapping("/api/bookmark")
	public ResponseEntity<BaseResponse<List<BookMark>>> getAllBookMark() {
		return new ResponseEntity<>(
				bookmarkServiceImpl.getAllBookMark(),
				HttpStatus.OK);
		
	}
	
	@DeleteMapping("/api/bookmark/delete/{id}")
	public ResponseEntity<BaseResponse<Long>> deleteBookMark(@PathVariable Long id) {
		return new ResponseEntity<> (
				bookmarkServiceImpl.deleteBookMark(id),
				HttpStatus.OK);
	}
	

}
