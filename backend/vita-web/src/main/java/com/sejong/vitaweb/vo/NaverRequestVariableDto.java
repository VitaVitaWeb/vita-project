package com.sejong.vitaweb.vo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class NaverRequestVariableDto {

    // 검색어
    String query;
    // 한 번에 표시할 검색 결과 개수(기본값: 10, 최댓값: 100)
    Integer display;
    // 검색 시작 위치(기본값: 1, 최댓값: 1000)
    Integer start;
    /*
    * 검색 결과 정렬 방법
    - sim: 정확도순으로 내림차순 정렬(기본값)
    - date: 날짜순으로 내림차순 정렬
    - asc: 가격순으로 오름차순 정렬
    - dsc: 가격순으로 내림차순 정렬
    * */
    String sort;

}