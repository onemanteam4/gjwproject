package com.omt.gjw.project.domain.noticelist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeListRepository {
	public int save(NoticeList noticeList) throws Exception;
	
	public List<NoticeList> getNoticeList(Map<String, Object> map) throws Exception;
	
	public int updateList(NoticeList noticeList) throws Exception;
	
	public int deleteList(int notice_code) throws Exception;
}
