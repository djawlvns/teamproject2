package com.tp.dws.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.BookMarkDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.BookMark;
import com.tp.dws.model.Vod;
import com.tp.dws.repository.BookMarkRepository;
import com.tp.dws.repository.VodRepository;
import com.tp.dws.service.BookMarkService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BookMarkServiceImpl implements BookMarkService {
	private final BookMarkRepository bookmarkRepository;
	private final VodRepository vodRepository;
	
	@Autowired
	public BookMarkServiceImpl(BookMarkRepository bookmarkRepository, 
			VodRepository vodRepository) {
		
		this.bookmarkRepository = bookmarkRepository;
		this.vodRepository = vodRepository;
	}
	
	public BaseResponse<Void> createBookMark(BookMarkDto bookmarkDto) {
		Vod vod = vodRepository.findByTitle(bookmarkDto.getVodname());
		if(vod == null) {
			throw new InvalidRequestException("Invald Vod", "동영상이 존재하지 않습니다.");
		}
		BookMark bookmark = new BookMark();
		bookmark.setThumbnail(bookmarkDto.getThumbnail());
		bookmark.setDescription(bookmarkDto.getDescription());
		bookmark.setTitle(bookmarkDto.getTitle());
		bookmark.setDate(bookmarkDto.getData());
		bookmark.setUrl(bookmarkDto.getUrl());
		
		bookmarkRepository.save(bookmark);
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				null,
				"북마크에 등록되었습니다."
				);
	}
	
	public BaseResponse<List<BookMark>> getAllBookMark(){
		List<BookMark> bookmarks = bookmarkRepository.findAll();
		if(bookmarks.isEmpty()) {
			throw new InvalidRequestException("BookMarks empty", "북마크가 등록되어 있지 않습니다.");
		}
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				bookmarks,
				ResultCode.SUCCESS.getMsg()
				);
	}

	
	public BaseResponse<Long> deleteBookMark(Long id) {
		Optional<BookMark> bookmark = bookmarkRepository.findById(id);
		if (bookmark.isEmpty()) {
			throw new InvalidRequestException(Long.toString(id), "북마크에 등록하지 않았습니다.");
		}
		bookmarkRepository.deleteById(id);
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				id,
				"북마크에서 삭제되었습니다."
				);
	}
}
