package com.omt.gjw.project.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testController {

	@GetMapping("/hours-of-operation/operation-find")
	public String loadFind() {
		return "hours-of-operation/operation-find";
	}
	
}
