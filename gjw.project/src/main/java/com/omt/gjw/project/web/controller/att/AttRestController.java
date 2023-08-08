package com.omt.gjw.project.web.controller.att;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.attraction.AttFoodService;
import com.omt.gjw.project.service.attraction.AttService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;
import com.omt.gjw.project.web.dto.att.AttRespDto;
import com.omt.gjw.project.web.dto.att.AttSearchReqDto;
import com.omt.gjw.project.web.dto.att.AttfoodRespDto;
import com.omt.gjw.project.web.dto.att.CourseRespDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AttRestController {
	
	private final AttService attService;
	private final AttFoodService attFoodService;

	
	@GetMapping("/mainride/{rideCode}")
	public ResponseEntity<?> mainatt(@PathVariable int rideCode){
		
		List<AttRespDto> mainLists = null;
		
		try {
			mainLists = attService.getmainList(rideCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1,  "failed", mainLists));	
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", mainLists));	
	}
	
	@GetMapping("/attraction/{rideCode}")
	public ResponseEntity<?> getattlist(@PathVariable int rideCode) {
		
		List<AttRespDto> attList = null;
		
		try {
			attList = attService.getRideList(rideCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", attList));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", attList));
		
	}
	
	@GetMapping("/mainride/search")
	public ResponseEntity<?> getsearch(AttSearchReqDto attSearchReqDto){
		
		List<AttRespDto> attRespDtos = null;
		
		try {
			attRespDtos = attService.getSearchList(attSearchReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", attRespDtos));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", attRespDtos));
	}
	
	
	@GetMapping("/RcdCourse/{rideThemeCode}")
	public ResponseEntity<?> getcourse(@PathVariable int rideThemeCode) {
		
		List<CourseRespDto> courseList = null;
		
		try {
			courseList = attService.getCourseList(rideThemeCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", courseList));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", courseList));

	}
	
	
	
}
