package com.omt.gjw.project.service.noticelist;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.noticelist.NoticeList;
import com.omt.gjw.project.domain.noticelist.NoticeListRepository;
import com.omt.gjw.project.web.dto.noticelist.CreateNoticeReqDto;
import com.omt.gjw.project.web.dto.noticelist.NoticeListRespDto;
import com.omt.gjw.project.web.dto.noticelist.UpdateNoticeReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NoticeListServiceImpl implements NoticeListService{
	private final NoticeListRepository noticeListRepository;
	@Override
	public boolean createNoticeList(CreateNoticeReqDto createNoticeReqDto) throws Exception {
		
		
		return noticeListRepository.save(createNoticeReqDto.toEntity())> 0;
	}
	@Override
	public List<NoticeListRespDto> getNoticeList(int page, int contentCount) throws Exception {
		
		List<NoticeList> noticeLists = noticeListRepository.getNoticeList(createGetNoticeListMap(page, contentCount));
		
		System.out.println(createNoticeListRespDtos(noticeLists));
		return createNoticeListRespDtos(noticeLists);
	}
	
	private Map<String, Object> createGetNoticeListMap(int page, int contentCount) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalPage", (page -1)* contentCount);
		map.put("count", contentCount);
		return map;
	}
	
	private List<NoticeListRespDto> createNoticeListRespDtos(List<NoticeList> noticeLists) {
		List<NoticeListRespDto> NoticeListRespDtos = new ArrayList<NoticeListRespDto>();
		noticeLists.forEach(notice -> {
			NoticeListRespDtos.add(notice.toListDto());
		});
		return NoticeListRespDtos;
	}
	@Override
	public boolean updateList(UpdateNoticeReqDto updateNoticeReqDto) throws Exception {
		
		
		return noticeListRepository.updateList(updateNoticeReqDto.toEntity())>0 ;
	}
	@Override
	public boolean deleteList(int noticeCode) throws Exception {
		
		return noticeListRepository.deleteList(noticeCode) > 0;
	}
	@Override
	public boolean updateCount(int noticeCode) throws Exception {
		
		return noticeListRepository.updateCount(noticeCode) > 0;
	}
	
	
	
	
	
	
	
	
	
	
}
