package com.sejong.vitaweb.vo;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RecommendDao {
    RecommendDto recommendAll();
}
