package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.Member;

import java.util.List;
import java.util.Map;


public interface MemberService {

  Member idCheck(String id) throws Exception;

  Member nickNameCheck(String nickName) throws Exception;



  Member get(String id, String password) throws Exception;

  boolean join(String email, String phoneNo, Member member) throws Exception;

  Member phoneNoCheck(String phoneNo) throws Exception;

  Member emailCheck(String email) throws Exception;

  boolean delete(String id) throws Exception;
  List<Member> list() throws Exception;

  Member get(String id) throws Exception;

  boolean update(Member member) throws Exception;

  Member findId(Map<String, String> map) throws Exception;

  Member findpwd(Map<String, String> map) throws Exception;

}
