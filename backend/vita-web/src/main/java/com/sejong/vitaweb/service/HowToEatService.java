package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.HowToEatDto;
import com.sejong.vitaweb.vo.Vitamin;
import org.springframework.stereotype.Service;



@Service
public interface HowToEatService {
    HowToEatDto findVitaByKey(int vno) throws Exception;
}
