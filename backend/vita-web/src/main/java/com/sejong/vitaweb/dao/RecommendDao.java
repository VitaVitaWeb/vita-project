package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.RecommendDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RecommendDao {
    RecommendDto recommendAll();
}
