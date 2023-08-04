package com.omt.gjw.project.web.controller.noticelist;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth-notice")
public class AdminPageController {

	@GetMapping("/notice_list_admin")
	public String loadList() {
		return "auth-notice/notice_list_admin";
	}
	
	@GetMapping("/notice_list_details")
	public String loadListAdmin() {
		return "auth-notice/notice_list_details";
	}
	
	@GetMapping("/notice_list_modification/{noticeCode}")
	public String loadListModification() {
		return "auth-notice/notice_list_modification";
	}
	
	
}
