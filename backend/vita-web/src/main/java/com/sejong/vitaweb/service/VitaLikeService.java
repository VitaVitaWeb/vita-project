package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.VitaLikeDao;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;




// 사용자별 찜하기
@RequiredArgsConstructor
@Service
public class VitaLikeService {
    private final VitaLikeDao vitaLikeDao;

    public void addVitaLike(String status, String id, int vno) {
        vitaLikeDao.insertVitaLike(status, id, vno);
    }
}
