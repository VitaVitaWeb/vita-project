package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.NaverDao;
import com.sejong.vitaweb.dao.VitaDao;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import com.sejong.vitaweb.vo.VitaminDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DefaultVitaService implements VitaService {
  private final VitaDao vitaDao;
  private final NaverDao naverDao;


  @Override
  public void insertVitaDetail(VitaminDetail vitaminDetail) {
    vitaDao.insertVitaDetail(vitaminDetail);
  }

  @Override
  public void insertVitaDB(List<NaverProductDto> prods){
    for(NaverProductDto prod : prods) {
//      naverDao.insertVitaDBToNaver(prod);
      vitaDao.insertVitaDBToVita(prod);
    }

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
