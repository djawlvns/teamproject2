package com.tp.dws.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.SchedulesDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.Schedules;
import com.tp.dws.model.User;
import com.tp.dws.repository.SchedulesRepository;
import com.tp.dws.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class SchedulesServiceImpl {

	private final SchedulesRepository schedulesRepository;
	private final UserRepository userRepository;
	
	@Autowired
	public SchedulesServiceImpl(SchedulesRepository schedulesRepository, UserRepository userRepository) {
		this.schedulesRepository = schedulesRepository;
		this.userRepository = userRepository;
	}
	
	public BaseResponse<Void> createSchedules(SchedulesDto schedulesDto) {
		User user = userRepository.findByLoginId(schedulesDto.getAdmin());
		if (user == null) {
			throw new InvalidRequestException("Invald author", "글쓰기 권한이 없습니다.");
		}
		
		Schedules schedules = new Schedules();
		schedules.setTime(schedulesDto.getTime());
		schedules.setSubject(schedulesDto.getSubject());
		
		schedulesRepository.save(schedules);
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				null,
				"시간표 생성 완료되었습니다."
				);
	}
	
	public BaseResponse<List<Schedules>> getAllSchedules() {
		List<Schedules> schedules = schedulesRepository.findAll();
		if(schedules.isEmpty()) {
			throw new InvalidRequestException("schedules empty", "시간표가 생성되지 않았습니다.");
		}
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				schedules,
				ResultCode.SUCCESS.getMsg()
				);
	}
	
	public BaseResponse<Long> deletSchedules(Long id) {
		Optional<Schedules> schedules = schedulesRepository.findById(id);
		if(schedules.isEmpty()) {
			throw new  InvalidRequestException(Long.toString(id), "해당 시간표가 존재하지 않습니다.");
		}
		schedulesRepository.deleteById(id);
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				id,
				"시간표 삭제가 완료되었습니다.");
				
	}
	
}
