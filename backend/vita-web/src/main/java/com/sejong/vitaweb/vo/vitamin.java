package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.sql.Date;

@Getter
@Setter
@ToString
public class vitamin implements Serializable {

  private String name;
  private String link; // 구매 링크
  private String img_path; // 이미지 링크

  private double e;
  private double d;
  private double a;
  private double b1;
  private double b2;
  private double b3;
  private double b4;
  private double b7;
  private double b9;
  private double b12;
  private double


}

