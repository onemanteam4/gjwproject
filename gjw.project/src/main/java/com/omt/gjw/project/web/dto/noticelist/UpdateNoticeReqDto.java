package com.omt.gjw.project.web.dto.noticelist;

import com.omt.gjw.project.domain.noticelist.NoticeList;

import lombok.Data;

@Data
public class UpdateNoticeReqDto {
	private int noticeCode;
	private String noticeList;
	
	
	public NoticeList toEntity() {
		return NoticeList.builder()
				.notice_code(noticeCode)
				.notice_title(noticeList)
				.build();
	}
}
