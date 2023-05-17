package com.sejong.vitaweb.dao;


import com.sejong.vitaweb.vo.BecarefulDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BecarefulDao {

    BecarefulDto findVitaByKey(int vno);

}
