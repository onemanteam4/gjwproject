package com.omt.gjw.project.web.controller.noticelist;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/notice")
public class AdminPageController {

	@GetMapping("/notice_list")
	public String loadList() {
		return "notice/notice_list";
	}
	
	@GetMapping("/notice_admin")
	public String loadListAdmin() {
		return "notice/notice_list_admin";
	}
}
