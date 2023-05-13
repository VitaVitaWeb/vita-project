package com.sejong.vitaweb.web.auth;

import com.sejong.vitaweb.service.MemberService;
import com.sejong.vitaweb.vo.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.regex.Pattern;

@Slf4j
@RestController
@RequestMapping("/auth/")
@RequiredArgsConstructor
public class AuthController {
  private final MemberService memberService;

  @ResponseBody
  @GetMapping("idCheck")
  public Boolean idCheck(@RequestParam("id") String id) throws Exception {
    log.info("통신 성공! = {}", id);
    Member result = memberService.idCheck(id);
    return inputCheck(id, result);
  }

  @ResponseBody
  @GetMapping("nameCheck")
  public Boolean nameCheck(@RequestParam String name) throws Exception {
    Member result = memberService.nameCheck(name);

    log.info("member = {}", result);

    return inputCheck(name, result);
  }

  private Boolean inputCheck(String inputString, Member result) throws Exception {
    if (result == null) {
      return true;
    } else {
      return false;
    }
  }

  @ResponseBody
  @GetMapping("phoneNoCheck")
  public Boolean phoneNoCheck(String phoneNo) throws Exception {
    log.info("phoneNo = {}", phoneNo);
    if (phoneNo.length() < 11) {
      return false;
    }
    Member result = memberService.phoneNoCheck(phoneNo);
    log.info("member = {}", result);
    if (result == null) {
      return true;
    } else {
      return false;
    }
  }



  @PostMapping("join")
  public Boolean join(@RequestBody Member member, Model model) throws Exception {
    log.info("member = {}", member);

    // 가입정보가 중복인지 확인하고 문제없다면 가입처리
    if(memberService.join(member.getId(), member.getPhoneNo(), member)) {
      return true;
    }

    return false;
  }

  @PostMapping("login")
  public Boolean login(
          @RequestParam("id") String id,
          @RequestParam("password")String password,
          HttpServletResponse response,
          HttpSession session) throws Exception {

    log.info("id = {} , pwd = {}", id, password);
    Member member = memberService.getMemberByIdAndPwd(id, password);
    log.info("member = {}", member);

    if (member != null) {
      session.setAttribute("loginMember", member); // 로그인한 멤버 정보를 세션 보관소에 저장
      log.info("login member = {}", session.getAttribute("loginMember"));
    }

    // 클라이언트에게 쿠키 보내기
    // - 쿠키 데이터는 문자열만 가능
    Cookie cookie = new Cookie("id", id); // 클라이언트 쪽에 저장할 쿠키 생성

    cookie.setPath("/");

//    if (saveEmail == null) {
//      cookie.setMaxAge(0); // 클라이언트에게 해당 이름의 쿠키를 지우라고 명령한다.
//    } else {
//      // 쿠키의 지속시간을 설정하지 않으면 웹브라우저가 실행되는 동안만 유효하다.
//      // 만약 웹브라우저를 종료하더라도 쿠키를 유지하고 싶다면,
//      // 지속 시간을 설정해야 한다.
//      cookie.setMaxAge(60 * 60 * 24 * 7);
//    }
    response.addCookie(cookie);

    if(member != null)
      return true;
    else
      return false;
  }

  @GetMapping("logout")
  public void logout(HttpSession httpSession) throws Exception {
    httpSession.invalidate();
  }

  @GetMapping("checkLogin")
  public Member checkLogin(HttpSession session) throws Exception {
    log.info("checkLogin-test");
    Member member = (Member) session.getAttribute("loginMember");
    System.out.println("member = " + member);
    if(member == null) {
      return null;
    } else {
      return member;
    }
  }
}
