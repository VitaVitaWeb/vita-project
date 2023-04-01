package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.NaverDao;
import com.sejong.vitaweb.dao.VitaDao;
import com.sejong.vitaweb.vo.NaverProductDto;
import com.sejong.vitaweb.vo.Vitamin;
import com.sejong.vitaweb.vo.VitaminDetail;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class DefaultVitaService implements VitaService {
  private final VitaDao vitaDao;
  private final NaverDao naverDao;

  @Override
  public void insertVitaDB(List<NaverProductDto> prods){
    for(NaverProductDto prod : prods) {
      Vitamin vitamin = new Vitamin(prod.getTitle(), prod.getLink(), prod.getImage(), prod.getCategory1(), prod.getCategory2(), prod.getCategory3(), prod.getCategory4());
      vitaDao.insertVitaDBToVita(vitamin);

      log.info("vitamin = {}", vitamin);

//      Vitamin newVitamin = vitaDao.getRecentVita();
//      log.info("newVitamin = {}", newVitamin);


//      int vno = newVitamin.getVno();
//      log.info("vno = {}", vno);

//      vitaDao.insertVitaDetailInit(vno);
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

  @Override
  public List<Vitamin> findVitalAll() throws Exception {
    return vitaDao.findVitalAll();
  }

  @Override
  public Vitamin findVitaById(String id) throws Exception {
    return vitaDao.findVitaById(id);
  }

  @Override
  public void updateVita(VitaminDetail vitaminDetail) throws Exception {
    vitaDao.updateVitaDetail(vitaminDetail);
  }

  @Override
  public VitaminDetail findVitalDetail(int vno) {
    return vitaDao.findVitalDetail(vno);
  }

  @Override
  public List<VitaminDetail> findVitalDetailAll() {
    return vitaDao.findVitalDetailAll();
  }


}
