package com.sejong.vitaweb.web.survey;

import com.sejong.vitaweb.service.SurveyService;
import com.sejong.vitaweb.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/survey/")
public class SurveyController {
    private  final SurveyService surveyService;

    @PostMapping("insert")
    public void insert(@RequestBody VitaSurveyDto vitaSurveyDto) {
        if(vitaSurveyDto == null || vitaSurveyDto.getId() == null) {
            throw new IllegalArgumentException("The vitaSurveyDto or its id should not be null.");
        }

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
    public VitaSurveyFunction getVitaFunction(@RequestParam String id) throws Exception {
        try {
            id = URLDecoder.decode(id, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new Exception("Invalid encoding");
        }
        log.info("id = {}", id);
        VitaSurveyFunction vitaSurveyFunction = surveyService.findFunctionById(id);
        log.info("vitaFunction = {}", vitaSurveyFunction);
        return vitaSurveyFunction;
    }

    @GetMapping("formulation")
    public VitaSurveyFormulation getVitaFormulation(@RequestParam String id) throws Exception {
        try {
            id = URLDecoder.decode(id, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new Exception("Invalid encoding");
        }
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
