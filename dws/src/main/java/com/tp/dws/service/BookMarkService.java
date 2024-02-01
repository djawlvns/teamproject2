package com.tp.dws.service;

import java.util.List;
import java.util.Optional;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.BookMarkDto;
import com.tp.dws.model.BookMark;

public interface BookMarkService {
	
	public BaseResponse<Void> createBookMark(BookMarkDto bookmarkdto);
	public BaseResponse<List<BookMark>> getAllBookMark();
	public BaseResponse<Long> deleteBookMark(Long id);
	

}
