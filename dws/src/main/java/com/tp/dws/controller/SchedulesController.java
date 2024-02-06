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
import com.tp.dws.dto.SchedulesDto;
import com.tp.dws.model.Schedules;
import com.tp.dws.service.impl.SchedulesServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000",
				methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
public class SchedulesController {

	private final SchedulesServiceImpl schedulesServiceImpl;

	@Autowired
	public SchedulesController(SchedulesServiceImpl schedulesServiceImpl) {
		this.schedulesServiceImpl = schedulesServiceImpl;
	}
	
	
	@PostMapping("/api/schedules")
	public ResponseEntity<BaseResponse<Void>> createSchedules(@RequestBody @Valid SchedulesDto schedultesDto) {
		return new ResponseEntity<>(
				schedulesServiceImpl.createSchedules(schedultesDto),
				HttpStatus.CREATED
				);
	}
	
	@GetMapping("/api/schedules")
	public ResponseEntity<BaseResponse<List<Schedules>>> getAllSchedules() {
		return new ResponseEntity<>(
				schedulesServiceImpl.getAllSchedules(),
				HttpStatus.OK);
	}
	
	@DeleteMapping("/api/schedules/{id}")
	public ResponseEntity<BaseResponse<Long>> deleteSchedules(@PathVariable Long id) {
		return new ResponseEntity<>(
				schedulesServiceImpl.deletSchedules(id),
				HttpStatus.OK);
	}

}
