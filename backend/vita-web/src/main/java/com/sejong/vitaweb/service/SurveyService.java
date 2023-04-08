package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SurveyService {
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
