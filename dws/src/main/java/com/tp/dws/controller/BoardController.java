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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tp.dws.dto.BaseResponse;
import com.tp.dws.dto.BoardDto;
import com.tp.dws.enumstatus.ResultCode;
import com.tp.dws.model.Board;
import com.tp.dws.service.impl.BoardServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="http://localhost:3000",
        methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE})
public class BoardController {
    private final BoardServiceImpl boardServiceImpl;
    @Autowired
    public BoardController(BoardServiceImpl boardServiceImpl) {
        this.boardServiceImpl = boardServiceImpl;
    }

    @PostMapping("/api/board")
    public ResponseEntity<BaseResponse<Void>> createBoard(@RequestBody @Valid BoardDto boardDto) {
        return new ResponseEntity<>(
                boardServiceImpl.createBoard(boardDto),
                HttpStatus.CREATED);
    }

    @GetMapping("/api/board")
    public ResponseEntity<BaseResponse<List<Board>>> getAllBoard() {
        return new ResponseEntity<>(
                boardServiceImpl.getAllBoard(),
                HttpStatus.OK);
    }

    @DeleteMapping("/api/board/delete/{id}")
    public ResponseEntity<BaseResponse<Long>> deleteBoard(@PathVariable Long id) {
        return new ResponseEntity<>(
                boardServiceImpl.deleteBoard(id),
                HttpStatus.OK);
    }

    @GetMapping("api/board/id")
    public ResponseEntity<BaseResponse<Void>> getTest(@RequestHeader("X-LoginID") String id) {
        return new ResponseEntity<>(
                new BaseResponse<>(ResultCode.SUCCESS.name(),
                        null,
                        id),
                HttpStatus.OK);
    }
}
