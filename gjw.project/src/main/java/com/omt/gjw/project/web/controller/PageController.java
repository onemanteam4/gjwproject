package com.omt.gjw.project.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
	
	@GetMapping({"/", "/index"})
	public String loadIndex() {
		return "index";
	}
	
	@GetMapping("/user/signin")
	public String loadSignin() {
		return "user/signin";
	}
	
	@GetMapping("/kdh-amusement/attraction")
	public String loadAttraction() {
		return "/kdh-amusement/attraction";
	}
	
	@GetMapping("/kdh-amusement/RcdCourse")
	public String loadRcdCourse() {
		return "/kdh-amusement/RcdCourse";
	}
}
