package com.sejong.vitaweb.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.sql.Date;

@Getter
@Setter
@ToString
public class Member implements Serializable {

  private String id; // email
  private String password;
  private Date createdDate;
  private String name;
  private String phoneNo;
  private Date birthDay;
  private int gender;

  public Member() {
  }



}

