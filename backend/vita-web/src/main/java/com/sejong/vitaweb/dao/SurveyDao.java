package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.VitaFormulation;
import com.sejong.vitaweb.vo.VitaFunction;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SurveyDao {
    void insertFunction(String id, VitaFunction vitaFunction);

    void insertFormulation(String id, VitaFormulation vitaFormulation);

    void insertSurvey(int forno, int funno);

    int getForNo(String id);
    int getFuncNo(String id);


    VitaFunction findFunctionById(String id);

    VitaFormulation findFormulationById(String id);

    int updateFunction(String id, VitaFunction vitaFunction);

    int updateFormulation(String id, VitaFormulation vitaFormulation);
}
