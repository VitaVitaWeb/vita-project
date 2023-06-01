package com.sejong.vitaweb.dao;

import com.sejong.vitaweb.vo.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;
import java.util.List;
import java.util.Map;


@Mapper
public interface MemberDao {

   Member findById(String id);

   Member findByName(String name);


   Member login(String id, String password);

//  Member findByEmail(String email);

  Member findByPhoneNo(String phoneNo);

  int join(Member member);

  int updateStatus(Member member);

  int delete(String id);

  List<Member> findAll();

  Member findByIdAll(String id);

  int update(Member member);

  Member findId(String name, Date birthday, int gender);

  Member findpwd(Map<String, String> map);

  void findpwdupdate(Map<String, String> map);

  Member checkCorrectUser(String id);

  int updatePassword(Map<String, String> params);

}
