package com.omt.gjw.project.web.controller.notice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/notice")
public class NoticePageController {

	@GetMapping("/notice_notice")
	public String loadNoticeNotice() {
		return "notice/notice_notice";
	}
	
	@GetMapping("/notice_client")
	public String loadNoticeClient() {
		return "notice/notice_client";
	}
	
	@GetMapping("/notice_lost")
	public String loadNoticeLost() {
		return "notice/notice_lost";
	}
	
	@GetMapping("/notice_question")
	public String loadNoticeQuestion() {
		return "notice/notice_question";
	}
	
//리스트들	
	@GetMapping("/notice_list_details")
	public String loadContents() {
		return "notice/notice_list_details";
	}
}
