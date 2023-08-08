package com.omt.gjw.project.web.controller.authmain;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AuthMainPageController {

	@GetMapping("/main")
	public String loadAuth() {
		return "auth-main/auth_main";
	}
}
