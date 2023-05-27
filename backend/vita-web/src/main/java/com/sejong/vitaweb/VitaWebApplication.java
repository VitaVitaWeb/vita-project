package com.sejong.vitaweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableTransactionManagement
@SpringBootApplication
public class VitaWebApplication {

	public static void main(String[] args) {

		SpringApplication.run(VitaWebApplication.class, args);
		System.out.println("vita-web project start!");
	}

}
