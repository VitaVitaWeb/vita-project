package com.sejong.vitaweb.web.VitaminPerPerson;


import com.sejong.vitaweb.service.ForPersonRecommendBySurveyService;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/personrecommend")
public class ForPersonRecommendBySurveyController {

    private final ForPersonRecommendBySurveyService forPersonRecommendBySurveyService;

    @GetMapping
    public List<Vitamin> personRecommend(@RequestParam String id) {
        return forPersonRecommendBySurveyService.getRecommendedVitamins(id);
    }

}
