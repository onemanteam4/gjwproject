package com.omt.gjw.project.web.dto.noticelist;

import java.time.LocalDateTime;

import com.omt.gjw.project.domain.noticelist.NoticeList;

import lombok.Data;

@Data
public class CreateNoticeReqDto {
	private String noticeTitle;
	private String noticeFile;
	private int noticeCount;
	
	
	
	public NoticeList toEntity() {
		return NoticeList.builder()
				.notice_title(noticeTitle)
				.notice_file(noticeFile)
				.notice_count(noticeCount)
				.build();
	}
}
