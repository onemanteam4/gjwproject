package com.omt.gjw.project.domain.noticelist;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeListRepository {
	public int save(NoticeList noticeList) throws Exception;
	
	public List<NoticeList> getTodoList(Map<String, Object> map) throws Exception;
}
