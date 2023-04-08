package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.SurveyDao;
import com.sejong.vitaweb.dao.VitaDao;
import com.sejong.vitaweb.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultSurveyService implements SurveyService {
  private final SurveyDao surveyDao;


  @Override
  public void insertFunction(String id, VitaFunction vitaFunction) {
    surveyDao.insertFunction(id, vitaFunction);
  }

  @Override
  public void insertFormulation(String id, VitaFormulation vitaFormulation) {
    surveyDao.insertFormulation(id, vitaFormulation);
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
  public VitaFunction findFunctionById(String id) {
    return surveyDao.findFunctionById(id);
  }

  @Override
  public VitaFormulation findFormulationById(String id) {
    return surveyDao.findFormulationById(id);
  }

  @Override
  public int updateFunction(String id, VitaFunction vitaFunction) {
    return surveyDao.updateFunction(id, vitaFunction);
  }

  @Override
  public int updateFormulation(String id, VitaFormulation vitaFormulation) {
    return surveyDao.updateFormulation(id, vitaFormulation);
  }
}
