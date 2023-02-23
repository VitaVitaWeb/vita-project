package com.sejong.vitaweb.web.board;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;
//해당 클래스가 컨트롤러를 알려주는 애노테이션

@RestController
@RequestMapping("/board")
public class BoardController {
    private final BoardMapper boardMapper;

    public BoardController(BoardMapper boardMapper) {
        this.boardMapper = boardMapper;
    }

    @GetMapping("/list")
    public List<Board> list() {
        return boardMapper.findAll();
    }

    @GetMapping("/write")
    public String write() {
        return "board/write";
    }

    @PostMapping("/write")
    public String write(Board board) {
        board.setDate(new Date());
        boardMapper.insert(board);
        return "redirect:/board/list";
    }
}


