package com.sejong.vitaweb.web.auth;

import com.sejong.vitaweb.service.MemberService;
import com.sejong.vitaweb.vo.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/member/")
public class MemberController {
  @Autowired
  MemberService memberService;
  // HttpSession 클래스 주입.
  @Autowired
  private HttpSession session;

  @GetMapping("list")
  public List<Member> list() throws Exception {
    return memberService.list();
  }
  @GetMapping("detail")
  public void detail(@RequestParam String id) throws Exception {
    Member member = memberService.get(id);

    if (member == null) {
      throw new Exception("해당 아이디의 회원이 없습니다.");
    }
  }


@PostMapping("update")
  public String update(Member member) throws Exception {
    if (!memberService.update(member)) {
      throw new Exception("회원 변경 오류입니다!");
    }
    return "redirect:list";
  }

  @GetMapping("delete")
  public String delete(String id) throws Exception {
    if (!memberService.delete(id)) {
      throw new Exception("회원 삭제 오류입니다!");
    }

    return "redirect:list";
  }

  @GetMapping("findid/{name}/{id}")
  @ResponseBody
  public String findId(@PathVariable("name") String name, @PathVariable("id") String id) throws Exception {
    Map<String, String> map = new HashMap();
    map.put("name", name);
    map.put("email", email);

    Member member = memberService.findId(map);

    if(member ==null){
      return "입력한 정보에 일치하는 회원이 존재하지 않습니다";
    }
    return member.getId() ;
  }

  @GetMapping("findid")
  public void findId()  throws Exception {

  }



  //  비밀번호 찾기
  @GetMapping("findpwd/{id}/{name}/{email}")
  @ResponseBody
  public String findpwd(@PathVariable("id") String id,@PathVariable("name") String name) throws Exception {
    Map<String, String> map = new HashMap();
    map.put("id", id);
    map.put("name", name);
    map.put("email", email);

    Member member = memberService.findpwd(map);

    if (member == null) {
      return "입력한 정보에 일치하는 회원이 존재하지 않습니다";
    }
    return member.getPassword();
  }

  @GetMapping("findpwd")
  public void findpwd()  throws Exception {

  }
}
