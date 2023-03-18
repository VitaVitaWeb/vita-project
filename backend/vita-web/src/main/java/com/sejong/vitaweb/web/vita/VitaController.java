package com.sejong.vitaweb.web.vita;

import com.sejong.vitaweb.service.VitaService;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vita/")
public class VitaController {
    @Autowired
    VitaService vitaService;

    @PostMapping("insertDB")
    public void insertVitaDB(List<NaverProductDto> prods) throws Exception{
        vitaService.insertVitaDB(prods);
    }

    @PostMapping("insertVita")
    public void insertVita(@RequestBody Vitamin vitamin) throws Exception {
        vitaService.insertVita(vitamin);
    }

    @GetMapping("list")
    public List<Vitamin> findVitalAll() throws Exception {
        return vitaService.findVitalAll();
    }

    @GetMapping("{id}")
    public Vitamin findVitaById(@PathVariable String id) throws Exception {
        return vitaService.findVitaById(id);
    }

    @PutMapping("update")
    public void updateVita(@RequestBody Vitamin vitamin) throws Exception {
        vitaService.updateVita(vitamin);
    }
}
