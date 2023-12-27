package com.tp.dws.service;

import java.util.List;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.BoardDto;
import com.tp.dws.model.Board;

public interface BoardService {

	public BaseResponse<Void> createBoard(BoardDto boardDto);
	public BaseResponse<List<Board>> getAllBoard();
	public BaseResponse<Long> deleteBoard(Long id);
}
