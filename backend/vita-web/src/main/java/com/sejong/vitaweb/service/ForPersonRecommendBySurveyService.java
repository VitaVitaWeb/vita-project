package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.ForPersonRecommendBySurveyMapper;
import com.sejong.vitaweb.vo.VitaFunction;
import com.sejong.vitaweb.vo.VitaSurveyFunction;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@RequiredArgsConstructor
@Service
public class ForPersonRecommendBySurveyService {

    private final ForPersonRecommendBySurveyMapper forPersonRecommendBySurveyMapper;


    public List<Vitamin> getRecommendedVitamins(String id) {
        return forPersonRecommendBySurveyMapper.getRecommendedVitamin(id);
    }
}
