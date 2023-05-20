package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.HowToEatDao;
import com.sejong.vitaweb.vo.HowToEatDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class DefaultHowToEatService implements HowToEatService{
    private final HowToEatDao howToEatDao;

    @Override
    public HowToEatDto findVitaByKey(int vno) throws Exception {
        return howToEatDao.findVitaByKey(vno);
    }
}
