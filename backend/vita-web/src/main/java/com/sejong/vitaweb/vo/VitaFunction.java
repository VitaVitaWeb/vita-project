package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class VitaFunction implements Serializable {
    private int vno;
    boolean sc; // stress-care
    boolean act; // 활력 증진
    boolean eye; // 눈 건강
    boolean joint; // 관절
    boolean oxy; // 항산화
    boolean sight; // 시력 및 눈 피로 개선
    boolean skin; // 피부
    boolean imn; // 면역 증진
    boolean jang; // 장 건강
    boolean gan; // 간 건강
    boolean prs; // 혈행 개선
    boolean bone; // 뼈 건강
    boolean col; // 콜레스트롤
    boolean vmid; // 혈중 중성 지질
}
