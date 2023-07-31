package com.omt.gjw.project.service.noticelist;

import java.util.List;

import com.omt.gjw.project.web.dto.noticelist.CreateNoticeReqDto;
import com.omt.gjw.project.web.dto.noticelist.NoticeListRespDto;

public interface NoticeListService {
	public boolean createNoticeList(CreateNoticeReqDto createNoticeReqDto) throws Exception;
	
	public List<NoticeListRespDto> getNoticeList(int page, int contentCount) throws Exception;
}
