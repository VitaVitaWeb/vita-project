package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class VitaSurvey implements Serializable {
    private int survey_no;
    private int forno; // vitamin survey formulation
    private int funno; // vitamin survey function 먹는 이유
}
