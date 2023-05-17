package com.sejong.vitaweb.service;


import com.sejong.vitaweb.dao.BecarefulDao;
import com.sejong.vitaweb.vo.BecarefulDto;
import com.sejong.vitaweb.vo.HowToEatDto;
import org.springframework.stereotype.Service;

@Service
public interface BecarefulService {
    BecarefulDto findVitaByKey(int vno) throws Exception;

}
