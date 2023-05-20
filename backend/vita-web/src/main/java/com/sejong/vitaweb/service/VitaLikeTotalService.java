package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.VitaLikeTotalDto;
import com.sejong.vitaweb.vo.VitaLikeTotalDto;
import org.springframework.stereotype.Service;



// 비타민별 총 좋아요 갯수 서비스
@Service
public interface VitaLikeTotalService {

    VitaLikeTotalDto findVitaByKey(int vno) throws Exception;
    int updateCntByKey(int vno) throws Exception;

    int minusCntByKey(int vno) throws Exception;
}
