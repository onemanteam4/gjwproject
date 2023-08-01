package com.omt.gjw.project.web.controller.noticelist;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class AdminPageController {

	@GetMapping("/notice/noticelist")
	public String loadList() {
		return "notice/noticelist";
	}
	
}
