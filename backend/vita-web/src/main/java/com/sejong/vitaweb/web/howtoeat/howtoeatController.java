package com.sejong.vitaweb.web.howtoeat;


import com.sejong.vitaweb.service.HowToEatService;
import com.sejong.vitaweb.vo.HowToEatDto;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@Slf4j
@RestController
@RequestMapping("/howtoeat")
public class howtoeatController {

    @Autowired
    private HowToEatService howToEatService;

    @GetMapping("/{vno}")
    public HowToEatDto findVitamin(@PathVariable int vno) throws Exception {
        log.info("vno = {}", vno);
        return howToEatService.findVitaByKey(vno);
    }

}
