package com.sejong.vitaweb.service;


import com.sejong.vitaweb.dao.VitaLikeTotalDao;
import com.sejong.vitaweb.vo.VitaLikeTotalDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class DefaultVitaLikeTotalService implements VitaLikeTotalService{

    private final VitaLikeTotalDao vitaLikeTotalDao;

    @Override
    public VitaLikeTotalDto findVitaByKey(int vno) throws Exception {
        return vitaLikeTotalDao.findVitaByKey(vno);
    }

    @Override
    public int updateCntByKey(int vno) throws Exception {
        return vitaLikeTotalDao.updateCntByKey(vno);
    }
}
