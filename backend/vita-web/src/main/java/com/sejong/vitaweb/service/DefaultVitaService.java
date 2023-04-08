package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.NaverDao;
import com.sejong.vitaweb.dao.VitaDao;
import com.sejong.vitaweb.vo.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultVitaService implements VitaService {
  private final VitaDao vitaDao;

  /**
   * Vitamin Logic
   */
  @Override
  public List<Vitamin> findVitalAll() throws Exception {
    return vitaDao.findVitalAll();
  }

  @Override
  public Vitamin findVitaByKey(int vno) throws Exception {
    return vitaDao.findVitaByKey(vno);
  }

  @Override
  public void updateVita(VitaminDetail vitaminDetail) throws Exception {
    vitaDao.updateVitaDetail(vitaminDetail);
  }


  /**
   * Vitamin Detail Logic
   */
  @Override
  public VitaminDetail findVitalDetail(int vno) {
    return vitaDao.findVitalDetail(vno);
  }

  @Override
  public List<VitaminDetail> findVitalDetailAll() {
    return vitaDao.findVitalDetailAll();
  }


  /**
   * Vitamin Formulation Logic
   */
  @Override
  public List<VitaFormulation> findVitaFormulationAll() {
    return vitaDao.findVitaFormulationAll();
  }
  @Override
  public VitaFormulation findVitaFormulationByKey(int vno){
    return vitaDao.findVitaFormulationByKey(vno);
  }


  /**
   * Vitamin Function Logic
   */
  @Override
  public List<VitaFunction> findVitaFunctionAll() {
    return vitaDao.findVitaFunctionAll();
  }
  @Override
  public VitaFunction findVitaFunctionByKey(int vno) {
    return vitaDao.findVitaFunctionByKey(vno);
  }


  /**
   * Init Logic
   */
  @Override
  public void insertVitaDB(List<NaverProductDto> prods){
    for(NaverProductDto prod : prods) {
      Vitamin vitamin = new Vitamin(prod.getTitle(), prod.getLink(), prod.getImage(), prod.getCategory1(), prod.getCategory2(), prod.getCategory3(), prod.getCategory4());
      vitaDao.insertVitaDBToVita(vitamin);

      log.info("vitamin = {}", vitamin);
    }

  }

  @Override
  public void setVitaDetail() {
    List<Vitamin> vitalAll = vitaDao.findVitalAll();
    for(Vitamin vitamin : vitalAll) {
      vitaDao.insertVitaDetailInit(vitamin.getVno());
      log.info("vno = {}", vitamin.getVno());
    }
  }

  public void setVitaFunction() {
    List<Vitamin> vitalAll = vitaDao.findVitalAll();
    for(Vitamin vitamin : vitalAll) {
      vitaDao.insertVitaFunctionInit(vitamin.getVno());
      log.info("vno = {}", vitamin.getVno());
    }
  }

  public void setVitaFormulation() {
    List<Vitamin> vitalAll = vitaDao.findVitalAll();
    for(Vitamin vitamin : vitalAll) {
      vitaDao.insertVitaFormulationInit(vitamin.getVno());
      log.info("vno = {}", vitamin.getVno());
    }
  }

}
