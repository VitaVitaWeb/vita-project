/*
package com.sejong.vitaweb.service;


import com.sejong.vitaweb.vo.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DefaultMailService implements MailService {
    private final JavaMailSender mailSender;


    @Transactional
    @Override
    public void findPassword(String recipientEmail, String checkcode) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("sejongreservation1234@gmail.com"); // 여기에 발신 이메일 주소를 넣으세요
        message.setTo(recipientEmail);
        message.setSubject("인증 코드 입니다!");
        message.setText("VitaWeb의 인증코드입니다!\n");
        message.setText("회원님의 인증코드: "+checkcode+"입니다!");
        mailSender.send(message);
    }
}
*/
