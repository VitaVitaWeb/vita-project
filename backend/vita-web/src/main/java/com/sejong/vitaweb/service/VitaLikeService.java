package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.VitaLikeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VitaLikeService {
    private final VitaLikeDao vitaLikeDao;

    public VitaLikeService(VitaLikeDao vitaLikeDao) {
        this.vitaLikeDao = vitaLikeDao;
    }

    public void addVitaLike(String status, String id, int vno) {
        vitaLikeDao.insertVitaLike(status, id, vno);
    }
}
