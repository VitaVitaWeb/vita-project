package com.sejong.vitaweb.dao;


import com.sejong.vitaweb.vo.HowToEatDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface HowToEatDao {

    HowToEatDto findVitaByKey(int vno);


}
