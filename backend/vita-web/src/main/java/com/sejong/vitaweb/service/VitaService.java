package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import com.sejong.vitaweb.vo.VitaminDetail;

import java.util.List;

public interface VitaService {
    void insertVitaDB(List<NaverProductDto> prods);
    void setVitaDetail();

    void setVitaFormulation();

    void setVitaFunction();

    List<Vitamin> findVitalAll() throws Exception;

    Vitamin findVitaById(String id) throws Exception;

    void updateVita(VitaminDetail vitaminDetail) throws Exception;

    VitaminDetail findVitalDetail(int vno);

    List<VitaminDetail> findVitalDetailAll();
}
