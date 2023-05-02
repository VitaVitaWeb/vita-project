package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.RecommendDto;
import com.sejong.vitaweb.vo.Vitamin;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RecommendService {
     RecommendDto recommendAll() throws Exception;
}
