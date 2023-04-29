package com.sejong.vitaweb.dao;


import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface VitaLikeDao {
    @Insert("INSERT INTO vitadb.vita_like (status, id, vno) VALUES (#{status}, #{id}, #{vno})")
    void insertVitaLike(@Param("status") String status, @Param("id") String id, @Param("vno") int vno);
}