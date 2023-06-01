package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.Member;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Map;

@Service
public interface MemberService {

  Member idCheck(String id) throws Exception;

  Member nameCheck(String name) throws Exception;



  Member getMemberByIdAndPwd(String id, String password) throws Exception;

  boolean join(String email, String phoneNo, Member member) throws Exception;

  Member phoneNoCheck(String phoneNo) throws Exception;

  Member emailCheck(String id) throws Exception;

  boolean delete(String id) throws Exception;
  List<Member> list() throws Exception;

  Member get(String id) throws Exception;

  boolean update(Member member) throws Exception;

  Member findId(String name, Date birthday, int gender) throws Exception;



//  Member findpwd(Map<String, String> map) throws Exception;

}
