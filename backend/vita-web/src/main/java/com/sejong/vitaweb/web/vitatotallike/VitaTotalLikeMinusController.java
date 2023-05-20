package com.sejong.vitaweb.web.vitatotallike;


import com.sejong.vitaweb.service.VitaLikeTotalService;
import com.sejong.vitaweb.vo.VitaLikeTotalDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/totallikeminus")
public class VitaTotalLikeMinusController {
    VitaLikeTotalService vitaLikeTotalService;

    @Autowired
    public VitaTotalLikeMinusController(VitaLikeTotalService vitaLikeTotalService) {
        this.vitaLikeTotalService = vitaLikeTotalService;
    }

    @PutMapping("/{vno}")
    public VitaLikeTotalDto minusCntByKey(@PathVariable int vno) throws Exception {
        vitaLikeTotalService.minusCntByKey(vno);
        return vitaLikeTotalService.findVitaByKey(vno);
    }
}
