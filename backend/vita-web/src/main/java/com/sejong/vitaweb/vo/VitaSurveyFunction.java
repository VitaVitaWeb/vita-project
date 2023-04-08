package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
public class VitaSurveyFunction implements Serializable {
    private int funno;

    private boolean sc; // stress-care
    private boolean act; // 활력 증진
    private boolean eye; // 눈 건강
    private boolean joint; // 관절
    private boolean oxy; // 항산화
    private boolean sight; // 시력 및 눈 피로 개선
    private boolean skin; // 피부
    private boolean imn; // 면역 증진
    private boolean jang; // 장 건강
    private boolean gan; // 간 건강
    private boolean prs; // 혈행 개선
    private boolean bone; // 뼈 건강
    private boolean col; // 콜레스트롤
    private boolean vmid; // 혈중 중성 지질

    private String id;
}
