package com.sejong.vitaweb.web.api;

import com.sejong.vitaweb.service.NaverProductService;
import com.sejong.vitaweb.service.VitaService;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.NaverRequestVariableDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
@Controller
public class ApiController {
    @Autowired
    NaverProductService naverProductService;
    @Autowired
    VitaService vitaService;

    @GetMapping("/search")
    public List<NaverProductDto> search(@RequestParam("q") String q, Model model) {
        NaverRequestVariableDto naverRequestVariableDto = NaverRequestVariableDto.builder()
                .query(q)
                .display(10)
                .start(1)
                .sort("sim")
                .build();

        //네이버 쇼핑 물품 보내는 부분
        List<NaverProductDto> naverProductDtos = naverProductService.naverShopSearchAPI(naverRequestVariableDto);
        model.addAttribute("naverProductList", naverProductDtos);

        vitaService.insertVitaDB(naverProductDtos); // 지우면 안돼요
        vitaService.setVitaFormulation(); // 지우면 안돼요

        return naverProductDtos;
    }

}