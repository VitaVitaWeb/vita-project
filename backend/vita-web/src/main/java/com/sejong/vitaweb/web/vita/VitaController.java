package com.sejong.vitaweb.web.vita;

import com.sejong.vitaweb.service.VitaService;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import com.sejong.vitaweb.vo.VitaminDetail;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/vita/")
public class VitaController {
    @Autowired
    VitaService vitaService;

    @GetMapping("list")
    public List<Vitamin> findVitalAll() throws Exception {
        return vitaService.findVitalAll();
    }

    // detail 관련
    @GetMapping("detailList/{vno}")
    public VitaminDetail findVitaDetail(@PathVariable int vno) throws Exception {
        log.info("vno = {}", vno);
        return vitaService.findVitalDetail(vno);
    }

    @GetMapping("detailList")
    public List<VitaminDetail> findVitaDetailAll() throws Exception {
        return vitaService.findVitalDetailAll();
    }

    @PutMapping("update")
    public void updateVitaDetail(@RequestBody VitaminDetail vitaminDetail) throws Exception {
        vitaService.updateVita(vitaminDetail);
    }

    @PostMapping("init-vita-function")
    public void initVitaFunction() throws Exception {
        vitaService.setVitaFunction();
    }

    @PostMapping("init-vita-formulation")
    public void initVitaFormulation() throws Exception {
        vitaService.setVitaFormulation();
    }

    @PostMapping("init-vita-detail")
    public void initVitaDetail() throws Exception {
        vitaService.setVitaDetail();
    }


}
