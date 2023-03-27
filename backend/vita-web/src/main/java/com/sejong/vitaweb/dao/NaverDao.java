package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface NaverDao {

   void insertVitaDBToNaver(NaverProductDto prod);

}
