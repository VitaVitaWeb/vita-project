package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class Vitamin implements Serializable {

  private int vno;
  private String name;
  private String link; // 구매 링크
  private String img_path; // 이미지 링크

  private String category1; // 상품의 카테고리(중분류)
  private String category2; // 상품의 카테고리(소분류)
  private String category3; // 상품의 카테고리(세분류)
  private String category4;

  public Vitamin(String name, String link, String img_path, String category1, String category2, String category3, String category4) {
    this.name = name;
    this.link = link;
    this.img_path = img_path;
    this.category1 = category1;
    this.category2 = category2;
    this.category3 = category3;
    this.category4 = category4;
  }


}

