package com.sejong.vitaweb.service;

import com.sejong.vitaweb.dao.MemberDao;
import com.sejong.vitaweb.vo.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

@Service
@Slf4j
public class DefaultMemberService implements MemberService {
  @Autowired
  private final MemberDao memberDao;



  @Autowired
  public DefaultMemberService(MemberDao memberDao) {
    this.memberDao = memberDao;
  }

  @Override
  public Member idCheck(String id) throws Exception {
    return memberDao.findById(id);
  }

  @Override
  public Member nameCheck(String name) throws Exception {
    return memberDao.findByName(name);
  }

  @Override
  public Member getMemberByIdAndPwd(String id, String password) throws Exception {
    return memberDao.login(id, password);
  }

  @Override
  public boolean join(String email, String phoneNo, Member member) throws Exception {
    if (memberDao.findByPhoneNo(phoneNo) != null) {
      return false;
    }
    memberDao.join(member);
    return true;
  }

  @Override
  public Member phoneNoCheck(String phoneNo) throws Exception {
    return memberDao.findByPhoneNo(phoneNo);
  }

  @Override
  public Member emailCheck(String id) throws Exception {
    return memberDao.findById(id);
  }

  @Transactional
  @Override
  public boolean delete(String id) throws Exception {
    return memberDao.delete(id) > 0; // 회원 삭제
  }

  @Override
  public List<Member> list() throws Exception {
    return memberDao.findAll();
  }

  @Override
  public Member get(String id)throws Exception {
    return memberDao.findByIdAll(id);
  }

  public boolean update(Member member) throws Exception {
    return memberDao.update(member) > 0;
  }

  @Override
  public Member findId(String name, Date birthday, int gender) throws Exception {
    return memberDao.findId(name, birthday, gender);
  }


  public boolean updatePassword(String id, String newPassword) {
    Map<String, String> params = new HashMap<>();
    params.put("id", id);
    params.put("pwd", newPassword);
    return memberDao.updatePassword(params) > 0;
  }




//  @Override
//  public Member findpwd(Map<String, String> map) throws Exception {
//    Member member = memberDao.findpwd(map);
//    if (member == null) return member;
//
//    String newPw = Integer.toString((int)(Math.random()*(100000000-10000000)+10000000));
//    map.put("password", newPw); // map정보 받아서 pw 수정
//    memberDao.findpwdupdate(map); // pw 업데이트
//
//    String id = "";
//    String pw = "";
//
//    Properties prop = new Properties();
//    prop.put("mail.smtp.host", "smtp.naver.com");
//    prop.put("mail.smtp.port", 465);
//    prop.put("mail.smtp.auth", "true");
//    prop.put("mail.smtp.ssl.enable", "true");
//    prop.put("mail.smtp.ssl.trust", "smtp.naver.com");
//
//    Session session = Session.getDefaultInstance(prop, new Authenticator() {
//      protected PasswordAuthentication getPasswordAuthentication() {
//        return new PasswordAuthentication(id, pw);
//      }
//    });
//
//    MimeMessage message = new MimeMessage(session);
//    message.setFrom(new InternetAddress(id));
//
//    message.addRecipient(Message.RecipientType.TO, new InternetAddress(member.getId()));
//    message.setSubject("HowMuchDoYouNeed 임시 비밀번호를 발급해드립니다.");
//    message.setText("안녕하세요 회원님 HowMuchDoYouNeed 의 임시비밀번호 발송해드립니다\n" + " 회원님의 임시비밀번호는" +
//                    "임시 비밀번호: " + newPw);
//    Transport.send(message);
//    System.out.println("임시비밀번호 메일 전송 완료");
//
//    return member;
//  }

}
