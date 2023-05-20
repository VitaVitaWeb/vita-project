package com.sejong.vitaweb.service;


import com.sejong.vitaweb.dao.BecarefulDao;
import com.sejong.vitaweb.vo.BecarefulDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class DefaultBecarefulService implements BecarefulService{



    private final BecarefulDao becarefuldao;

    @Override
    public BecarefulDto findVitaByKey(int vno) throws Exception {
        return becarefuldao.findVitaByKey(vno);
    }
}
