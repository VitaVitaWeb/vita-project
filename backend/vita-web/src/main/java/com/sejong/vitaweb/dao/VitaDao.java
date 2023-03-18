package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.Member;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;


@Mapper
public interface VitaDao {

   void insertVitaDB(List<NaverProductDto> prods);

   void insertVita(Vitamin vitamin);

   List<Vitamin> findVitalAll();

   Vitamin findVitaById(String id);

   void updateVita(Vitamin vitamin);

}
