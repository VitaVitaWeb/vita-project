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
    public void insert(@RequestBody VitaSurveyDto vitaSurveyDto) {
        log.info("info = {}", vitaSurveyDto);
        VitaSurveyFormulation vitaSurveyFormulation = new VitaSurveyFormulation(vitaSurveyDto);
        VitaSurveyFunction vitaSurveyFunction = new VitaSurveyFunction(vitaSurveyDto);
        if(surveyService.isDuplicatedSurvey(vitaSurveyDto.getId())) {
            surveyService.updateFunction(vitaSurveyDto.getId(), vitaSurveyFunction);
            surveyService.updateFormulation(vitaSurveyDto.getId(), vitaSurveyFormulation);
        } else{
            surveyService.insertFunction(vitaSurveyDto.getId(), vitaSurveyFunction);
            surveyService.insertFormulation(vitaSurveyDto.getId(), vitaSurveyFormulation);
            int forno = surveyService.getForNo(vitaSurveyDto.getId());
            int funno = surveyService.getFuncNo(vitaSurveyDto.getId());
            surveyService.insertSurvey(forno, funno);
        }
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

    @PatchMapping("edit")
    public void editSurvey(@RequestBody VitaSurveyDto vitaSurveyDto) {
        VitaSurveyFormulation vitaSurveyFormulation = new VitaSurveyFormulation(vitaSurveyDto);
        VitaSurveyFunction vitaSurveyFunction = new VitaSurveyFunction(vitaSurveyDto);
        int functionUpdate = surveyService.updateFunction(vitaSurveyDto.getId(), vitaSurveyFunction);
        if(functionUpdate < 1) {
            throw new IllegalStateException("function 수정에 실패하였습니다.");
        }
        int formulationUpdate = surveyService.updateFormulation(vitaSurveyDto.getId(), vitaSurveyFormulation);
        if(formulationUpdate < 1) {
            throw new IllegalStateException("formulation 수정에 실패하였습니다.");
        }
    }

    @GetMapping("isNullFunction")
    public int isNullFunction(@RequestParam String id) {
        return surveyService.isFunctionNullById(id);
    }

}
