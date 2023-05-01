package com.sejong.vitaweb.vo;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.bind.annotation.RequestMapping;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class RecommendDto
{
    // 비타민 정보들
    private double e;
    private double d;
    private double a;
    private double b1;
    private double b2;
    private double b3;
    //    private double b4;
    private double b5;
    private double b7;
    private double b9;
    private double b12;
    private double c;
    private double cr;
    private double mo;
    private double i;
    private double mn;
    private double se;
    private double cu;
    private double zn;
    private double fe;
    private double mg;
    private double ca;

    // add column
    private double lacto;
    private double lutein;
    private double milk_thistle;
    private double omega3;

    // add column
    private double msm;
    private double propolis;
    private double collagen;
    private double theanine;
}
