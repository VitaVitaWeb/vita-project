package com.sejong.vitaweb.web.vitatotallike;


import com.sejong.vitaweb.service.VitaLikeTotalService;
import com.sejong.vitaweb.vo.VitaLikeTotalDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


// 영양제 별 총 찜하기(하트표시) 개수 추가 및 갯수반환
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/totallike")
public class VitaTotalLikeController {

    VitaLikeTotalService vitaLikeTotalService;

    @Autowired
    public VitaTotalLikeController(VitaLikeTotalService vitaLikeTotalService) {
        this.vitaLikeTotalService = vitaLikeTotalService;
    }


    @GetMapping("/{vno}")
    public VitaLikeTotalDto findVitaByKey(@PathVariable int vno) throws Exception {
        return vitaLikeTotalService.findVitaByKey(vno);
    }


    @PutMapping("/{vno}")
    public VitaLikeTotalDto increaseCntByKey(@PathVariable int vno) throws Exception {
        vitaLikeTotalService.updateCntByKey(vno);
        return vitaLikeTotalService.findVitaByKey(vno);
    }



}
