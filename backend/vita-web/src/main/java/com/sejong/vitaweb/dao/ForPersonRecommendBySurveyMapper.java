package com.sejong.vitaweb.dao;


import com.sejong.vitaweb.vo.Vitamin;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ForPersonRecommendBySurveyMapper {

     List<Vitamin> getRecommendedVitamin(@Param("id") String id);

}
