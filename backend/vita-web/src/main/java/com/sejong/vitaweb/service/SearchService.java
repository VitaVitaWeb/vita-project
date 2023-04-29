package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.SearchDao;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SearchService {
    List<Vitamin> searchVitamin(String searchValue);
}
