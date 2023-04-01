package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.Member;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import com.sejong.vitaweb.vo.VitaminDetail;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;


@Mapper
public interface VitaDao {
   void insertVitaDetailInit(int vno);

   Vitamin getRecentVita();

   int insertVitaDBToVita(Vitamin vitamin);

   List<Vitamin> findVitalAll();

   Vitamin findVitaById(String id);

   void updateVitaDetail(VitaminDetail vitaminDetail);

   VitaminDetail findVitalDetail(int vno);

   List<VitaminDetail> findVitalDetailAll();
}
