package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.SurveyDao;
import com.sejong.vitaweb.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultSurveyService implements SurveyService {
  private final SurveyDao surveyDao;


  @Override
  public void insertFunction(String id, VitaSurveyFunction vitaSurveyFunction) {
    surveyDao.insertFunction(id, vitaSurveyFunction);
  }

  @Override
  public void insertFormulation(String id, VitaSurveyFormulation vitaSurveyFormulation) {
    surveyDao.insertFormulation(id, vitaSurveyFormulation);
  }

  @Override
  public void insertSurvey(int forno, int funno) {
    surveyDao.insertSurvey(forno, funno);
  }

  @Override
  public int getForNo(String id) {
    return surveyDao.getForNo(id);
  }

  @Override
  public int getFuncNo(String id) {
    return surveyDao.getFuncNo(id);
  }

  @Override
  public VitaSurveyFunction findFunctionById(String id) {
    return surveyDao.findFunctionById(id);
  }

  @Override
  public VitaSurveyFormulation findFormulationById(String id) {
    return surveyDao.findFormulationById(id);
  }

  @Override
  public int updateFunction(String id, VitaSurveyFunction vitaSurveyFunction) {
    return surveyDao.updateFunction(id, vitaSurveyFunction);
  }

  @Override
  public int updateFormulation(String id, VitaSurveyFormulation vitaSurveyFormulation) {
    return surveyDao.updateFormulation(id, vitaSurveyFormulation);
  }

  @Override
  public int isFunctionNullById(String id) {
    return surveyDao.isFunctionNullById(id);
  }

  @Override
  public boolean isDuplicatedSurvey(String id) {
    if(surveyDao.isDuplicatedSurvey(id)>0) return true;
    else return false;
  }
}
