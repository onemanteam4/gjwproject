package com.omt.gjw.project.web.controller.auth;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthPageController {

	@GetMapping("/signup_first")
	public String loadSignupFirst() {
		return "auth/signup_first";
	}
	
	@GetMapping("/signup_main")
	public String loadSignupMain() {
		return "auth/signup_main";
	}
}