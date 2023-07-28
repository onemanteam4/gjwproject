package com.omt.gjw.project.web.controller.att;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AttPageController {
	
	@GetMapping("/kdh-amusement/attraction")
	public String loadAttraction() {
		return "/kdh-amusement/attraction";
	}
	
	@GetMapping("/kdh-amusement/RcdCourse")
	public String loadRcdCourse() {
		return "/kdh-amusement/RcdCourse";
	}
	
	@GetMapping("/attride/{rideCode}")
	public String loadattview() {
		return "/viewpage/attview50";
	}
	
	
}
