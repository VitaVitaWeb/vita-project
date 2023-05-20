package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.RecommendDao;
import com.sejong.vitaweb.vo.RecommendDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DefaultRecommendServcie implements RecommendService{
    @Autowired
    private RecommendDao recommendDao;

    @Override
    public RecommendDto recommendAll() throws Exception {
        return recommendDao.recommendAll();
    }
}
