package com.tp.dws.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.BoardDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.exception.InvalidRequestException;
import com.tp.dws.model.Board;
import com.tp.dws.model.User;
import com.tp.dws.repository.BoardRepository;
import com.tp.dws.repository.UserRepository;
import com.tp.dws.service.BoardService;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    @Autowired
    public BoardServiceImpl(BoardRepository boardRepository, UserRepository userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }

    public BaseResponse<Void> createBoard(BoardDto boardDto) {
        User user = userRepository.findByLoginId(boardDto.getAuthor());
        if (user == null) {
            throw new InvalidRequestException("Invalid author", "글쓰기 권한이 없습니다");
        }
        // Board 객체 생성
        Board board = new Board();
        board.setCreateAt(LocalDateTime.now());
        board.setAuthor(boardDto.getAuthor());
        board.setCategory(boardDto.getCategory());
        board.setText(boardDto.getText());
        board.setTitle(boardDto.getTitle());

        // 리포지토리 저장
        boardRepository.save(board);
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                null,
                "게시글 생성이 완료되었습니다");
    }

    public BaseResponse<List<Board>> getAllBoard() {
        List<Board> boards = boardRepository.findAll();
        if (boards.isEmpty()) {
            throw new InvalidRequestException("Boards empty", "게시글이 존재하지 않습니다");
        }
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                boards,
                ResultCode.SUCCESS.getMsg());
    }

    public BaseResponse<Long> deleteBoard(Long id) {
        Optional<Board> board = boardRepository.findById(id);
        if (board.isEmpty()) {
            throw new InvalidRequestException(Long.toString(id), "해당 게시글이 존재하지 않습니다");
        }
        boardRepository.deleteById(id);
        return new BaseResponse<>(
                ResultCode.SUCCESS.name(),
                id,
                "게시글 삭제가 완료되었습니다");
    }


}
