package com.omt.gjw.project.web.dto.noticelist;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;



@Builder
@Data
public class NoticeListRespDto {

	private int noticeCode;
	private String noticeTitle;
	private String noticeFile;
	private int noticeCount;
	private int totalCount;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
	
}
