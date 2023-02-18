package com.sejong.vitaweb.dao;


import com.sejong.vitaweb.vo.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ModifyMyPageDao {

//    int profileUpdate(Member member);

    int myAccountUpdate(Member member);

    Member findById(String id);

    // 닉네임 중복 확인
//    int findByNickName(String nickName);

    int checkPassword(@Param("id")String memberId, @Param("password") String memberPw);
    int resignMemberStatus(@Param("id")String memberId, @Param("password") String memberPw);
}
