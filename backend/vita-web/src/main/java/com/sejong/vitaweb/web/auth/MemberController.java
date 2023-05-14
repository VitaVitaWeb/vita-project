package com.sejong.vitaweb.web.auth;

import com.sejong.vitaweb.service.MemberService;
import com.sejong.vitaweb.vo.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/member/")
@Slf4j
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;

  @GetMapping("list")
  public List<Member> list() throws Exception {
    log.info("list = {}", memberService.list());
    return memberService.list();
  }


  @GetMapping("detail")
  public Member detail(@RequestParam String id) throws Exception {
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

//
//
//
//  //  비밀번호 찾기
//  @GetMapping("findpwd/{id}/{name}/{email}")
//  @ResponseBody
//  public String findpwd(@PathVariable("id") String id,@PathVariable("name") String name) throws Exception {
//    Map<String, String> map = new HashMap();
//    map.put("id", id);
//    map.put("name", name);
//    map.put("email", email);
//
//    Member member = memberService.findpwd(map);
//
//    if (member == null) {
//      return "입력한 정보에 일치하는 회원이 존재하지 않습니다";
//    }
//    return member.getPassword();
//  }
//
//  @GetMapping("findpwd")
//  public void findpwd()  throws Exception {
//
//  }
}
