package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.Vitamin;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SearchDao {
    List<Vitamin> searchVitaminName(String searchValue);

    List<Vitamin> searchDetailE(String searchValue);
    List<Vitamin> searchDetailD(String searchValue);
    List<Vitamin> searchDetailA(String searchValue);
    List<Vitamin> searchDetailB(String searchValue);
    List<Vitamin> searchDetailC(String searchValue);
    List<Vitamin> searchDetailCr(String searchValue);
    List<Vitamin> searchDetailMo(String searchValue);
    List<Vitamin> searchDetailI(String searchValue);
    List<Vitamin> searchDetailMn(String searchValue);
    List<Vitamin> searchDetailSe(String searchValue);
    List<Vitamin> searchDetailCu(String searchValue);
    List<Vitamin> searchDetailZn(String searchValue);
    List<Vitamin> searchDetailFe(String searchValue);
    List<Vitamin> searchDetailMg(String searchValue);
    List<Vitamin> searchDetailCa(String searchValue);
    List<Vitamin> searchDetailLacto(String searchValue);
    List<Vitamin> searchDetailLutein(String searchValue);
    List<Vitamin> searchDetailMilkThistle(String searchValue);
    List<Vitamin> searchDetailOmega3(String searchValue);
    List<Vitamin> searchDetailMsm(String searchValue);
    List<Vitamin> searchDetailPropolis(String searchValue);
    List<Vitamin> searchDetailCollagen(String searchValue);
    List<Vitamin> searchDetailTheanine(String searchValue);

    List<Vitamin> searchFunctionSc(String searchValue);
    List<Vitamin> searchFunctionAct(String searchValue);
    List<Vitamin> searchFunctionEye(String searchValue);
    List<Vitamin> searchFunctionJoint(String searchValue);
    List<Vitamin> searchFunctionOxy(String searchValue);
    List<Vitamin> searchFunctionSight(String searchValue);
    List<Vitamin> searchFunctionImn(String searchValue);
    List<Vitamin> searchFunctionSkin(String searchValue);
    List<Vitamin> searchFunctionJang(String searchValue);
    List<Vitamin> searchFunctionGan(String searchValue);
    List<Vitamin> searchFunctionPrs(String searchValue);
    List<Vitamin> searchFunctionBone(String searchValue);
    List<Vitamin> searchFunctionCol(String searchValue);
    List<Vitamin> searchFunctionVmid(String searchValue);


}
