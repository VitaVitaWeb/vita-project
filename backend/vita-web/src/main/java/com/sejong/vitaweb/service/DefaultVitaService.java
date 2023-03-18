package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.VitaDao;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DefaultVitaService implements VitaService {
  @Autowired
  private final VitaDao vitaDao;

  @Autowired
  public DefaultVitaService(VitaDao vitaDao) {
    this.vitaDao = vitaDao;
  }

  @Override
  public void insertVitaDB(List<NaverProductDto> prods) throws Exception {
    vitaDao.insertVitaDB(prods);
  }

  @Override
  public void insertVita(Vitamin vitamin) throws Exception {
    vitaDao.insertVita(vitamin);
  }

  @Override
  public List<Vitamin> findVitalAll() throws Exception {
    return vitaDao.findVitalAll();
  }

  @Override
  public Vitamin findVitaById(String id) throws Exception {
    return vitaDao.findVitaById(id);
  }

  @Override
  public void updateVita(Vitamin vitamin) throws Exception {
    vitaDao.updateVita(vitamin);
  }


}
