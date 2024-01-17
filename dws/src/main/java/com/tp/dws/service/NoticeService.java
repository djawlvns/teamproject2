package com.tp.dws.service;

import java.util.List;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.NoticeDto;
import com.tp.dws.model.Notice;

public interface NoticeService  {

	public BaseResponse<Void> createNotice(NoticeDto noticeDto);
	
	public BaseResponse<List<Notice>> getAllNotice();
	
	public BaseResponse<Long> deleteNotice(Long id);
}
