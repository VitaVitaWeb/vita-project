package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;

import java.util.List;

public interface VitaService {
    public void insertVitaDB(List<NaverProductDto> prods) throws Exception;

    public void insertVita(Vitamin vitamin) throws Exception;

    public List<Vitamin> findVitalAll() throws Exception;

    public Vitamin findVitaById(String id) throws Exception;

    public void updateVita(Vitamin vitamin) throws Exception;
}
