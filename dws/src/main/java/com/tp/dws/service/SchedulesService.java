package com.tp.dws.service;

import java.util.List;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.SchedulesDto;
import com.tp.dws.model.Schedules;

public interface SchedulesService {
	
	public BaseResponse<Void> createSchedules(SchedulesDto schedulesDto);
	public BaseResponse<List<Schedules>> getAllSchedules();
	public BaseResponse<Long> deleteSchedules(Long id); 

}
