package com.tp.dws.service.impl;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.NoticeDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.Notice;
import com.tp.dws.repository.NoticeRepository;
import com.tp.dws.repository.UserRepository;
import com.tp.dws.service.CustomUserDetailsService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class NoticeServiceImpl {

	
	private final NoticeRepository noticeRepository;
	private final UserRepository userRepository;

	@Autowired
	public NoticeServiceImpl(NoticeRepository noticeRepository, UserRepository userRepository) {
		this.noticeRepository = noticeRepository;
		this.userRepository = userRepository;
	}

//	공지사항 만들기
	public BaseResponse<Void> createNotice(NoticeDto noticeDto) {


	    Notice notice = new Notice();
	    notice.setCreateAt(LocalDate.now());
	    notice.setAuthor(noticeDto.getAuthor());
	    notice.setTitle(noticeDto.getTitle());
	    notice.setContent(noticeDto.getContent());

	    noticeRepository.save(notice);

	    return new BaseResponse<>(
	            ResultCode.SUCCESS.name(),
	            null,
	            "게시글 생성이 완료되었습니다.");
	}
//	공지사항 불러오기
	public BaseResponse<List<Notice>> getAllNotice(){
		List<Notice> notices = noticeRepository.findAll();
		if(notices.isEmpty()) {
			throw new InvalidRequestException("Notices empty", "게시글이 존재하지 않습니다.");
		}
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				notices,
				ResultCode.SUCCESS.getMsg());
	}
	
//	공지사항 삭제
	public BaseResponse<Long> deleteNotice(Long id) {
		Optional<Notice> notice = noticeRepository.findById(id);
		if(notice.isEmpty()) {
			throw new InvalidRequestException(Long.toString(id),"해당 게시글이 존재하지 않습니다.");
		}
		noticeRepository.deleteById(id);
		return new BaseResponse<>(
				ResultCode.SUCCESS.name(),
				id,
				"게시글 삭제가 완료되었습니다.");
	}

//	공지사항 조회수
	public Notice getNotice(Long id) {
		Optional<Notice> notice = this.noticeRepository.findById(id);
		if(notice.isPresent()) {
			Notice notice1 = notice.get();
			notice1.setView(notice1.getView()+1);
			this.noticeRepository.save(notice1);
			return notice1;
		}
		else {
			throw new InvalidRequestException(Long.toString(id), "공지사항이 없습니다.");
		}
	}
	
}
