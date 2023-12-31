package com.omt.gjw.project.web.controller.noticelist;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.noticelist.NoticeListService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.noticelist.CreateNoticeReqDto;
import com.omt.gjw.project.web.dto.noticelist.NoticeListRespDto;
import com.omt.gjw.project.web.dto.noticelist.UpdateNoticeReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/noticelist")
@RequiredArgsConstructor
public class NoticeListController {
	private final NoticeListService noticeListService;
	
	@PostMapping("/addlist")
	public ResponseEntity<?> addContent(@RequestBody CreateNoticeReqDto createNoticeReqDto) {
		boolean status = false;
		
		try {
			status = noticeListService.createNoticeList(createNoticeReqDto);
			
			
		} catch (Exception e) {
			
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", status));
		}
		
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	
	
	
	
	
	
	@GetMapping("/noticelist/notice")
	public ResponseEntity<?> getNoticeList(@RequestParam int page, int contentCount) {
		List<NoticeListRespDto> list = null;
		
		try {
			list = noticeListService.getNoticeList(page, contentCount);
		} catch (Exception e) {
			
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, page + "page list fail to load", list));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, page + "page list success to load", list));
	}
	
	@PutMapping("/noticelist/update/{noticeCode}")
	public ResponseEntity<?> setcompleteNotice(@PathVariable int noticeCode, @RequestBody UpdateNoticeReqDto updateNoticeReqDto) {
		boolean status = false;
		updateNoticeReqDto.setNoticeCode(noticeCode); 
		
		try {
			status = noticeListService.updateListSet(updateNoticeReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	@PutMapping("/noticelist/count")
	public ResponseEntity<?> NoticeCount(@RequestParam int noticeCode) {
		boolean status = false;
		
		try {
			status = noticeListService.updateCount(noticeCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	
	@DeleteMapping("/noticelist/delete")
	public ResponseEntity<?> removeNotice(@RequestParam int noticeCode) {
		boolean status = false;
		
		try {
			status = noticeListService.deleteList(noticeCode);
		} catch (Exception e) {
			
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
	
	
	
}
