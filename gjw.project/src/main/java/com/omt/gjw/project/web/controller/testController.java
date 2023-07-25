package com.omt.gjw.project.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {
	
	@GetMapping("/hours-of-operation/operation")
	public String loadOperation() {
		return "/hours-of-operation/operation";
	}

	@GetMapping("/hours-of-operation/operation-find")
	public String loadFind() {
		return "/hours-of-operation/operation-find";
	}
	
	@GetMapping("/hours-of-operation/operation-parking")
	public String loadParking() {
		return "/hours-of-operation/operation-parking";
	}
	
	@GetMapping("/hours-of-operation/operation-holiday")
	public String loadHoliday() {
		return "/hours-of-operation/operation-holiday";
	}
	
	@GetMapping("/hours-of-operation/operation-tip")
	public String loadTip() {
		return "/hours-of-operation/operation-tip";
	}
}
