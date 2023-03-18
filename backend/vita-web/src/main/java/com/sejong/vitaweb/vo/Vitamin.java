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

}

