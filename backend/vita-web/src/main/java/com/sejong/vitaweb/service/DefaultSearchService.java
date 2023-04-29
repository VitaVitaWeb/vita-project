package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.SearchDao;
import com.sejong.vitaweb.dao.SurveyDao;
import com.sejong.vitaweb.vo.VitaSurveyFormulation;
import com.sejong.vitaweb.vo.VitaSurveyFunction;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultSearchService implements SearchService {
  private final SearchDao searchDao;

  public List<Vitamin> searchVitamin(String searchValue) {
    /**
     * 1. 제형을 검색하는 경우 X
     * 2. 기능을 검색하는 경우
     * 3. 비타민 이름을 검색하는 경우
     * 4. 비타민 세부 속성을 검색하는 경우
     */
    List<Vitamin> vitamins = null;
    if(searchValue.contains("e") || searchValue.contains("비타민")) {
      vitamins = searchDao.searchDetailE(searchValue);
    } else if(searchValue.contains("d") || searchValue.contains("비타민")) {
      vitamins = searchDao.searchDetailD(searchValue);
    } else if (searchValue.contains("a") || searchValue.contains("비타민")) {
      vitamins = searchDao.searchDetailA(searchValue);
    } else if (searchValue.contains("b") || searchValue.contains("비타민")) {
      vitamins = searchDao.searchDetailB(searchValue);
    } else if (searchValue.contains("c") || searchValue.contains("비타민")) {
      vitamins = searchDao.searchDetailC(searchValue);
    } else if (searchValue.contains("cr")) {
      vitamins = searchDao.searchDetailCr(searchValue);
    } else if (searchValue.contains("mo")) {
      vitamins = searchDao.searchDetailMo(searchValue);
    } else if (searchValue.contains("i")|| searchValue.contains("아이오딘")) {
      vitamins = searchDao.searchDetailI(searchValue);
    } else if (searchValue.contains("mn")) {
      vitamins = searchDao.searchDetailMn(searchValue);
    } else if (searchValue.contains("se")) {
      vitamins = searchDao.searchDetailSe(searchValue);
    } else if (searchValue.contains("cu")|| searchValue.contains("구리")) {
      vitamins = searchDao.searchDetailCu(searchValue);
    } else if (searchValue.contains("zn")|| searchValue.contains("아연")) {
      vitamins = searchDao.searchDetailZn(searchValue);
    } else if (searchValue.contains("fe")|| searchValue.contains("철")) {
      vitamins = searchDao.searchDetailFe(searchValue);
    } else if (searchValue.contains("mg")|| searchValue.contains("마그네슘")) {
      vitamins = searchDao.searchDetailMg(searchValue);
    } else if (searchValue.contains("ca")|| searchValue.contains("칼슘")) {
      vitamins = searchDao.searchDetailCa(searchValue);
    } else if (searchValue.contains("lacto")|| searchValue.contains("락토")) {
      vitamins = searchDao.searchDetailLacto(searchValue);
    } else if (searchValue.contains("lutein")|| searchValue.contains("루테인")) {
      vitamins = searchDao.searchDetailLutein(searchValue);
    } else if (searchValue.contains("milk_thistle")|| searchValue.contains("밀크씨슬")) {
      vitamins = searchDao.searchDetailMilkThistle(searchValue);
    } else if (searchValue.contains("omega3")|| searchValue.contains("오메가")) {
      vitamins = searchDao.searchDetailOmega3(searchValue);
    } else if (searchValue.contains("msm")|| searchValue.contains("식이유황")) {
      vitamins = searchDao.searchDetailMsm(searchValue);
    } else if (searchValue.contains("propolis")|| searchValue.contains("프로폴리스")) {
      vitamins = searchDao.searchDetailPropolis(searchValue);
    } else if (searchValue.contains("collagen")|| searchValue.contains("콜라겐")) {
      vitamins = searchDao.searchDetailCollagen(searchValue);
    } else if (searchValue.contains("theanine")|| searchValue.contains("티아민")) {
      vitamins = searchDao.searchDetailTheanine(searchValue);
    } else if (searchValue.contains("stress-care")  || searchValue.contains("스트레스") || searchValue.contains("스트레스케어")) {
      vitamins = searchDao.searchFunctionSc(searchValue);
    } else if (searchValue.contains("act") || searchValue.contains("활력증진") || searchValue.contains("활력")) {
      vitamins = searchDao.searchFunctionAct(searchValue);
    } else if (searchValue.contains("eye") || searchValue.contains("눈")) {
      vitamins = searchDao.searchFunctionEye(searchValue);
    } else if (searchValue.contains("joint") || searchValue.contains("관절")) {
      vitamins = searchDao.searchFunctionJoint(searchValue);
    } else if (searchValue.contains("oxy") || searchValue.contains("항산화")) {
      vitamins = searchDao.searchFunctionOxy(searchValue);
    } else if (searchValue.contains("sight") || searchValue.contains("시력")  || searchValue.contains("눈")  || searchValue.contains("피로")) {
      vitamins = searchDao.searchFunctionSight(searchValue);
    } else if (searchValue.contains("skin") || searchValue.contains("피부")) {
      vitamins = searchDao.searchFunctionSkin(searchValue);
    } else if (searchValue.contains("immune") || searchValue.contains("면역")) {
      vitamins = searchDao.searchFunctionImn(searchValue);
    } else if (searchValue.contains("jang") || searchValue.contains("장")) {
      vitamins = searchDao.searchFunctionJang(searchValue);
    } else if (searchValue.contains("gan") || searchValue.contains("간")) {
      vitamins = searchDao.searchFunctionGan(searchValue);
    } else if (searchValue.contains("prs") || searchValue.contains("혈행") || searchValue.contains("개선")) {
      vitamins = searchDao.searchFunctionPrs(searchValue);
    } else if (searchValue.contains("bone") || searchValue.contains("뼈")) {
      vitamins = searchDao.searchFunctionBone(searchValue);
    } else if (searchValue.contains("cholesterol") || searchValue.contains("콜레스트롤")) {
      vitamins = searchDao.searchFunctionCol(searchValue);
    } else if (searchValue.contains("blood triglyceride") || searchValue.contains("혈중") || searchValue.contains("중성") || searchValue.contains("지질")) {
      vitamins = searchDao.searchFunctionVmid(searchValue);
    } else {
      vitamins = searchDao.searchVitaminName(searchValue);
    }

    return vitamins;
  }
}
