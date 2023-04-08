package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;


@Mapper
public interface VitaDao {

   /**
    * Vitamin Logic
    */
   List<Vitamin> findVitalAll();

   Vitamin findVitaByKey(int vno);

   /**
    * VitaminDetail Logic
    */

   void updateVitaDetail(VitaminDetail vitaminDetail);

   VitaminDetail findVitalDetail(int vno);

   List<VitaminDetail> findVitalDetailAll();

   /**
    * Vitamin Formulation Logic
    */
   List<VitaFormulation> findVitaFormulationAll();
   VitaFormulation findVitaFormulationByKey(int vno);


   /**
    * Vitamin Function Logic
    */
   List<VitaFunction> findVitaFunctionAll();
   VitaFunction findVitaFunctionByKey(int vno);


   /**
    * Init Logic
    */
   void insertVitaDetailInit(int vno);
   void insertVitaFunctionInit(int vno);
   void insertVitaFormulationInit(int vno);

   int insertVitaDBToVita(Vitamin vitamin);
}
