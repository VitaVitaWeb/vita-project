package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.VitaFormulation;
import com.sejong.vitaweb.vo.VitaFunction;
import com.sejong.vitaweb.vo.VitaSurveyFormulation;
import com.sejong.vitaweb.vo.VitaSurveyFunction;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SurveyDao {
    void insertFunction(String id, VitaSurveyFunction vitaSurveyFunction);

    void insertFormulation(String id, VitaSurveyFormulation vitaSurveyFormulation);

    void insertSurvey(int forno, int funno);

    int getForNo(String id);
    int getFuncNo(String id);


    VitaSurveyFunction findFunctionById(String id);

    VitaSurveyFormulation findFormulationById(String id);

    int updateFunction(String id, VitaSurveyFunction vitaSurveyFunction);

    int updateFormulation(String id, VitaSurveyFormulation vitaSurveyFormulation);


    int isFunctionNullById(String id);
}
