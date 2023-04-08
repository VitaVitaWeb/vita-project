package com.sejong.vitaweb.web.survey;

import com.sejong.vitaweb.service.SurveyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/survey/")
public class SurveyController {
    @Autowired
    SurveyService surveyService;

    


}
