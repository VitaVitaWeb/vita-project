package com.sejong.vitaweb.dao;


import com.sejong.vitaweb.vo.VitaLikeTotalDto;
import org.apache.ibatis.annotations.Mapper;



// 이건 영양제 마다 전체 회원들이 찜하기(하트표시를) 얼마나 했는지 알기위한 것입니다.
@Mapper
public interface VitaLikeTotalDao {

    VitaLikeTotalDto findVitaByKey(int vno);
    int updateCntByKey(int vno);
}
