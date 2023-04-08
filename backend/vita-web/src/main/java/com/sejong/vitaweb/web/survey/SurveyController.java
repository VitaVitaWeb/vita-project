package com.sejong.vitaweb.web.survey;

import com.sejong.vitaweb.service.SurveyService;
import com.sejong.vitaweb.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequestMapping("/survey/")
public class SurveyController {
    @Autowired
    SurveyService surveyService;

    @PostMapping("insert")
    public void insert(@RequestParam String id,
                       @RequestBody VitaSurveyFunction vitaSurveyFunction,
                       @RequestBody VitaSurveyFormulation vitaSurveyFormulation) {
        surveyService.insertFunction(id, vitaSurveyFunction);
        surveyService.insertFormulation(id, vitaSurveyFormulation);
        int forno = surveyService.getForNo(id);
        int funno = surveyService.getFuncNo(id);
        surveyService.insertSurvey(forno, funno);
    }

    @GetMapping("function")
    public VitaSurveyFunction getVitaFunction(@RequestParam String id) {
        log.info("id = {}", id);
        VitaSurveyFunction vitaSurveyFunction = surveyService.findFunctionById(id);
        log.info("vitaFunction = {}", vitaSurveyFunction);
        return vitaSurveyFunction;
    }

    @GetMapping("formulation")
    public VitaSurveyFormulation getVitaFormulation(@RequestParam String id) {
        log.info("id = {}", id);
        return surveyService.findFormulationById(id);
    }

    @PutMapping("edit")
    public void editSurvey(@RequestParam String id,
                           @RequestBody VitaSurveyFunction vitaSurveyFunction,
                           @RequestBody VitaSurveyFormulation vitaSurveyFormulation) {
        int functionUpdate = surveyService.updateFunction(id, vitaSurveyFunction);
        if(functionUpdate < 1) {
            throw new IllegalStateException("function 수정에 실패하였습니다.");
        }
        int formulationUpdate = surveyService.updateFormulation(id, vitaSurveyFormulation);
        if(formulationUpdate < 1) {
            throw new IllegalStateException("formulation 수정에 실패하였습니다.");
        }
    }

    @GetMapping("isNullFunction")
    public int isNullFunction(@RequestParam String id) {
        return surveyService.isFunctionNullById(id);
    }

}
