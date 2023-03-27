package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import com.sejong.vitaweb.vo.VitaminDetail;

import java.util.List;

public interface VitaService {

    void insertVitaDetail(VitaminDetail vitaminDetail);
    public void insertVitaDB(List<NaverProductDto> prods);

    public void insertVita(Vitamin vitamin) throws Exception;

    public List<Vitamin> findVitalAll() throws Exception;

    public Vitamin findVitaById(String id) throws Exception;

    public void updateVita(Vitamin vitamin) throws Exception;
}
