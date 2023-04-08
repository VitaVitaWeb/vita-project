package com.sejong.vitaweb.service;

import com.sejong.vitaweb.vo.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface VitaService {

    /**
     * Vitamin Logic
     */
    List<Vitamin> findVitalAll() throws Exception;

    Vitamin findVitaByKey(int vno) throws Exception;

    void updateVita(VitaminDetail vitaminDetail) throws Exception;


    /**
     * Vitamin Detail Logic
     */
    VitaminDetail findVitalDetail(int vno);

    List<VitaminDetail> findVitalDetailAll();


    /**
     * Vitamin Formulation Logic
     */
    List<VitaFormulation> findVitaFormulationAll();
    VitaFormulation findVitaFormulationByKey(int vno);


    /**
     * Vitamin Function Logic
     */
    List<VitaFunction> findVitaFunctionAll();
    VitaFunction findVitaFunctionByKey(int vno);


    /**
     * Init Logic
     */
    void insertVitaDB(List<NaverProductDto> prods);
    void setVitaDetail();

    void setVitaFormulation();

    void setVitaFunction();
}
