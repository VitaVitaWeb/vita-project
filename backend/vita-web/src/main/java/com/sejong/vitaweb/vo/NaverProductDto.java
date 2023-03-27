package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.ToString;
import org.json.JSONObject;

import javax.swing.*;
import java.io.Serializable;

@ToString
@Getter
public class NaverProductDto implements Serializable {

    // 상품 이름
    private String title;
    // 상품 정보 URL
    private String link;
    // 섬네일 이미지의 URL
    private String image;
    // 최저가. 최저가 정보가 없으면 0을 반환합니다. 가격 비교 데이터가 없으면 상품 가격
    private Integer lprice;
    // 최고가. 최고가 정보가 없거나 가격 비교 데이터가 없으면 0을 반환
//    private Integer hprice;
    // 상품을 판매하는 쇼핑몰. 쇼핑몰 정보가 없으면 네이버를 반환
    private String mallName;
    // 제조사
    private String maker;
    // 브랜드
    private String brand;
    // 상품의 카테고리(대분류)
    private String category1;
    // 상품의 카테고리(중분류)
    private String category2;
    // 상품의 카테고리(소분류)
    private String category3;
    // 상품의 카테고리(세분류)
    private String category4;



    public NaverProductDto(JSONObject itemJson) {
        this.title = itemJson.getString("title");
        this.link = itemJson.getString("link");
        this.image = itemJson.getString("image");
        this.lprice = itemJson.getInt("lprice");
//        this.hprice = itemJson.getInt("hprice");
        this.mallName = itemJson.getString("mallName");
        this.maker = itemJson.getString("maker");
        this.brand = itemJson.getString("brand");
        this.category1 = itemJson.getString("category1");
        this.category2 = itemJson.getString("category2");
        this.category3 = itemJson.getString("category3");
        this.category4 = itemJson.getString("category4");
    }
}