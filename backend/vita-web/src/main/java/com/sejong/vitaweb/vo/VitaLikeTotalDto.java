package com.sejong.vitaweb.vo;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class VitaLikeTotalDto implements Serializable {
    private int vno;
    private int cnt;
}
