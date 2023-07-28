package com.omt.gjw.project.web.controller.notice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NoticePageController {

	@GetMapping("/notice/notice_notice")
	public String loadNoticeNotice() {
		return "notice/notice_notice";
	}
	
	@GetMapping("/notice/notice_client")
	public String loadNoticeClient() {
		return "notice/notice_client";
	}
	
	@GetMapping("/notice/notice_lost")
	public String loadNoticeLost() {
		return "notice/notice_lost";
	}
	
	@GetMapping("/notice/notice_question")
	public String loadNoticeQuestion() {
		return "notice/notice_question";
	}
}
