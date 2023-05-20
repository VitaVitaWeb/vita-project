package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.Member;
import org.springframework.stereotype.Service;

@Service
public interface MailService {
    void findPassword(String recipientEmail , String checkcode);
}
