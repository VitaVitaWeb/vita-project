package com.sejong.vitaweb.web.board.mapper;

import com.sejong.vitaweb.web.board.Board;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface BoardMapper {
    @Select("SELECT * FROM board")
    List<Board> findAll();

    @Insert("INSERT INTO board (title, content, date) VALUES (#{title}, #{content}, #{date})")
    void insert(Board board);
}

