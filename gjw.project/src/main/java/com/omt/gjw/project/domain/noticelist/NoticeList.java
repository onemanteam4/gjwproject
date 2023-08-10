
package com.omt.gjw.project.domain.noticelist;

import java.time.LocalDateTime;

import com.omt.gjw.project.web.dto.noticelist.NoticeListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class NoticeList {
	private int notice_code;
	private String notice_title;
	private String notice_file;
	
	private int notice_count;
	
	private int total_count;
	
	private LocalDateTime notice_date;
	private LocalDateTime notice_update;
	
	
	
	public NoticeListRespDto toListDto() {
		return NoticeListRespDto.builder()
				.noticeCode(notice_code)
				.noticeTitle(notice_title)
				.noticeFile(notice_file)
				.noticeCount(notice_count)
				.totalCount(total_count)
				.createDate(notice_date)
				.updateDate(notice_update)
				.build();
	}
	
}
