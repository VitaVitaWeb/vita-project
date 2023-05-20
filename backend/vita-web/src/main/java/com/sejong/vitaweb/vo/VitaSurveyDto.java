package com.sejong.vitaweb.vo;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Data
@Getter
@Setter
public class VitaSurveyDto implements Serializable {
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

    boolean cap; // 캡슐 형태
    boolean pill; // 정 형태
    boolean pow; // 가루 형태
    boolean liq; // 액상 형태
    boolean chew; // 츄어블 형태

    private String id;

    public VitaSurveyDto() {
    }

    public VitaSurveyDto(boolean sc, boolean act, boolean eye, boolean joint, boolean oxy, boolean sight, boolean skin, boolean imn, boolean jang, boolean gan, boolean prs, boolean bone, boolean col, boolean vmid,
                         boolean cap, boolean pill, boolean pow, boolean liq, boolean chew, String id) {
        this.sc = sc;
        this.act = act;
        this.eye = eye;
        this.joint = joint;
        this.oxy = oxy;
        this.sight = sight;
        this.skin = skin;
        this.imn = imn;
        this.jang = jang;
        this.gan = gan;
        this.prs = prs;
        this.bone = bone;
        this.col = col;
        this.vmid = vmid;
        this.cap = cap;
        this.pill = pill;
        this.pow = pow;
        this.liq = liq;
        this.chew = chew;
        this.id = id;
    }
}
