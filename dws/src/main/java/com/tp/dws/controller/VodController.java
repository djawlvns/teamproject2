package com.tp.dws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.VodDto;
import com.tp.dws.model.Vod;
import com.tp.dws.service.impl.VodServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="http://localhost:3000",
methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class VodController {

	private final VodServiceImpl vodServiceImpl;

	@Autowired
	public VodController(VodServiceImpl vodServiceImpl) {
		this.vodServiceImpl = vodServiceImpl;
	}
	
	@PostMapping("/api/vod")
	public ResponseEntity<BaseResponse<Void>> createVod(@RequestBody @Valid VodDto vodDto){
		return new ResponseEntity<>(
				vodServiceImpl.createVod(vodDto),
				HttpStatus.CREATED
				);
	}
	
	@GetMapping("/api/vod")
	public ResponseEntity<BaseResponse<List<Vod>>> getAllVod(){
		return new ResponseEntity<>(
				vodServiceImpl.getAllVod(),
				HttpStatus.OK);
	}
	

}
