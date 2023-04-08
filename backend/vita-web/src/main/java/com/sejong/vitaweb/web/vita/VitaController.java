package com.sejong.vitaweb.web.vita;

import com.sejong.vitaweb.service.VitaService;
import com.sejong.vitaweb.vo.*;
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

    /**
     *
     * Vitamin Logic
     */
    @GetMapping("list")
    public List<Vitamin> findVitalAll() throws Exception {
        return vitaService.findVitalAll();
    }

    @GetMapping("{vno}")
    public Vitamin findVitamin(@PathVariable int vno) throws Exception {
        log.info("vno = {}", vno);
        return vitaService.findVitaByKey(vno);
    }

    @PutMapping("update")
    public void updateVitaDetail(@RequestBody VitaminDetail vitaminDetail) throws Exception {
        vitaService.updateVita(vitaminDetail);
    }

    /**
     *
     * Vitamin Detail Logic
     */
    @GetMapping("detail/{vno}")
    public VitaminDetail findVitaDetail(@PathVariable int vno) throws Exception {
        log.info("vno = {}", vno);
        return vitaService.findVitalDetail(vno);
    }

    @GetMapping("detailList")
    public List<VitaminDetail> findVitaDetailAll() throws Exception {
        return vitaService.findVitalDetailAll();
    }

    /**
     *
     * Vitamin Function Logic
     */
    @GetMapping("functionList")
    public List<VitaFunction> functionList() {
        return vitaService.findVitaFunctionAll();
    }
    @GetMapping("function/{vno}")
    public VitaFunction findFunctionByKey(@PathVariable int vno) {
        return vitaService.findVitaFunctionByKey(vno);
    }



    /**
     *
     * Vitamin Formulation Logic
     */
    @GetMapping("formulationList")
    public List<VitaFormulation> formulationList() {
        return vitaService.findVitaFormulationAll();
    }
    @GetMapping("formulation/{vno}")
    public VitaFormulation findFormulationByKey(@PathVariable int vno) {
        return vitaService.findVitaFormulationByKey(vno);
    }






    /**
     *
     * Vitamin Search Logic
     */




    /**
     * DB Init Logic
     */
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
