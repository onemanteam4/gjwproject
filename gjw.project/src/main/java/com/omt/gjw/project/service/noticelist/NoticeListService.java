package com.omt.gjw.project.service.noticelist;

import java.util.List;

import com.omt.gjw.project.web.dto.noticelist.CreateNoticeReqDto;
import com.omt.gjw.project.web.dto.noticelist.NoticeListRespDto;
import com.omt.gjw.project.web.dto.noticelist.UpdateNoticeReqDto;

public interface NoticeListService {
	public boolean createNoticeList(CreateNoticeReqDto createNoticeReqDto) throws Exception;
	
	public List<NoticeListRespDto> getNoticeList(int page, int contentCount) throws Exception;
	
	public boolean updateListSet(UpdateNoticeReqDto updateNoticeReqDto) throws Exception;
	
	public boolean updateCount(int noticeCode) throws Exception;
	
	public boolean deleteList(int noticeCode) throws Exception;
}
