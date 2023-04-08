package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class VitaSurveyFormulation implements Serializable {
    private int forno;
    boolean cap; // 캡슐 형태
    boolean pill; // 정 형태
    boolean pow; // 가루 형태
    boolean liq; // 액상 형태
    boolean chew; // 츄어블 형태

    String id;
}
