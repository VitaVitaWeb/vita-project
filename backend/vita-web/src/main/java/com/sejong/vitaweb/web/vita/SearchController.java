package com.sejong.vitaweb.web.vita;

import com.sejong.vitaweb.service.SearchService;
import com.sejong.vitaweb.service.VitaService;
import com.sejong.vitaweb.vo.Vitamin;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final VitaService vitaService;
    private final SearchService searchService;

    @GetMapping
    public List<Vitamin> getVitaminSearch(@RequestParam("q") String searchValue) {
        log.info("검색어 = {}", searchValue);
        return searchService.searchVitamin(searchValue);
    }

}
