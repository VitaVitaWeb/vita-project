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
  private Map<String, Integer> tempPasswords = new HashMap<>();

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
  public Member update(@RequestBody Member member) throws Exception {
    if (!memberService.update(member)) {
      throw new Exception("회원 변경 오류입니다!");
    }
    return member;
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
  public void findpwd(@RequestBody Map<String, String> requestBody) throws Exception{
// 4자리 코드를 생성합니다.
    String email = requestBody.get("email");

    int verifycode = (int)((Math.random() * 9000) + 1000);
    String emailSubject = "VitaWeb 비밀번호 확인 코드입니다.";
    String emailText = "임시 비밀번호: "+ verifycode +"입니다!";
    mailService.sendSimpleMessage(email,emailSubject,emailText);

    // 임시 비밀번호를 저장합니다.
    tempPasswords.put(email, verifycode);

  }


  @PostMapping("verifypwd")
  @ResponseBody
  public String  verifyPwd(@RequestBody Map<String, Object> requestBody) throws Exception {

    String email = (String) requestBody.get("email");
    int code = Integer.parseInt((String) requestBody.get("code")); // 변환 부분
    // 사용자가 제출한 코드와 저장된 코드를 비교합니다.
    Integer correctCode = tempPasswords.get(email);
    if (correctCode != null && correctCode == code) {
      // 사용자의 비밀번호를 '1234'로 초기화합니다.
      Member member = memberService.get(email);
      if (member != null) {
        member.setPassword("1234");
        memberService.update(member);

        // 비밀번호가 초기화 되었음을 알려주는 메시지를 반환합니다.
        return "비밀번호가 '1234'로 초기화되었습니다. 마이페이지에서 변경 가능합니다.";
      }
    }
    return "인증 코드가 잘못되었습니다. 다시 시도해주세요.";
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
