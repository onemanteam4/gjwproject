package com.omt.gjw.project.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
	
	@GetMapping({"/", "/index"})
	public String loadIndex() {
		return "index";
	}
	
	@GetMapping("/auth/signin")
	public String loadSignin() {
		return "auth/signin";
	}
	
	@GetMapping("/admin/checkUser")
	public String loadCheckUser() {
		return "chart/ticket_chart";
	}
	
	@GetMapping("/admin/checkUserGender")
	public String loadCheckUserGender() {
		return "chart/user_gender";
	}
	
}
