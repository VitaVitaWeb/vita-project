package com.sejong.vitaweb.web.auth;

import com.sejong.vitaweb.service.MailService;
import com.sejong.vitaweb.service.MemberService;
import com.sejong.vitaweb.vo.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.net.URLDecoder;
import java.io.UnsupportedEncodingException;
import java.util.Map;

@RestController
@RequestMapping("/member/")
@Slf4j
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;
  private final MailService mailService;


  @GetMapping("list")
  public List<Member> list() throws Exception {
    log.info("list = {}", memberService.list());
    return memberService.list();
  }


  @GetMapping("detail")
  public Member detail(@RequestParam String id) throws Exception {
    try {
      id = URLDecoder.decode(id, "UTF-8");
    } catch (UnsupportedEncodingException e) {
      e.printStackTrace();
      throw new Exception("Invalid encoding");
    }


    Member member = memberService.get(id);

    log.info("member = {}", member);

    if (member == null) {
      throw new Exception("해당 아이디의 회원이 없습니다.");
    }

    return member;
  }


@PostMapping("update")
  public void update(Member member) throws Exception {
    if (!memberService.update(member)) {
      throw new Exception("회원 변경 오류입니다!");
    }
  }

  @GetMapping("delete")
  public void delete(String id) throws Exception {
    if (!memberService.delete(id)) {
      throw new Exception("회원 삭제 오류입니다!");
    }
  }

  @GetMapping("findid")
  @ResponseBody
  public String findId(@RequestParam("name") String name,
                       @RequestParam("birthday") Date birthday,
                       @RequestParam("gender") int gender) throws Exception {
    Member member = memberService.findId(name, birthday, gender);

    if(member ==null){
      return null;
    }
    return member.getId() ;
  }


  @PostMapping("findpwd")
  @ResponseBody
  public void findpwd(@RequestParam("email") String email, @RequestParam("verifycode") int verifycode) throws Exception{

    String emailSubject = "VitaWeb 비밀번호 확인 코드입니다.";
    String emailText = "임시 비밀번호: "+ verifycode +"입니다!";
    mailService.sendSimpleMessage(email,emailSubject,emailText);
  }



  //  비밀번호 찾기
//  @GetMapping("findpwd/{id}/{verifycode}")
//  @ResponseBody
//  public String findpwd(@PathVariable("id") String id,@PathVariable("name") String name) throws Exception {
//    String emailSubject = "VitaWeb 비밀번호 확인 코드입니다.";
//    String emailText = "임시 비밀번호: "+ veri
//
//    if (member == null) {
//      return "입력한 정보에 일치하는 회원이 존재하지 않습니다";
//    }
//    return member.getPassword();
//  }


}
