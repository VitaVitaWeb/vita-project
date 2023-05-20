package com.sejong.vitaweb.web.becareful;


import com.sejong.vitaweb.service.BecarefulService;
import com.sejong.vitaweb.service.HowToEatService;
import com.sejong.vitaweb.vo.BecarefulDto;
import com.sejong.vitaweb.vo.HowToEatDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/becareful")
public class BeCarefulController {

    @Autowired
    private BecarefulService becarefulService;

    @GetMapping("/{vno}")
    public BecarefulDto findVitamin(@PathVariable int vno) throws Exception {
        log.info("vno = {}", vno);
        return becarefulService.findVitaByKey(vno);
    }


}
