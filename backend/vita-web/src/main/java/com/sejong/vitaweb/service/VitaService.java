package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.NaverProductDto;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface VitaService {
    public void insertVitaDB(List<NaverProductDto> prods) throws Exception;
}
