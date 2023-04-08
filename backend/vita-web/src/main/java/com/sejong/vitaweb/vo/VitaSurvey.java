package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class VitaSurvey implements Serializable {
    private String id; // member id
    private int forno; // vitamin survey formulation
    private int funno; // vitamin survey function
    private int vino; // vitamin survey detail
}
