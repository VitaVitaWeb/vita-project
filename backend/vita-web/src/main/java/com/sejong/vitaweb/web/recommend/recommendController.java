package com.sejong.vitaweb.web.recommend;


import com.sejong.vitaweb.service.RecommendService;
import com.sejong.vitaweb.vo.RecommendDto;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/recommend")
@RequiredArgsConstructor
public class recommendController {

    RecommendService recommendService;

    @Autowired
    public recommendController(RecommendService recommendService) {
        this.recommendService = recommendService;
    }


    @GetMapping
    public RecommendDto recommendAll() throws Exception {
        return recommendService.recommendAll();
    }

}
