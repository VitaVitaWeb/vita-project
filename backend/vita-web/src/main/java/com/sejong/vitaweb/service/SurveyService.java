package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SurveyService {
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
