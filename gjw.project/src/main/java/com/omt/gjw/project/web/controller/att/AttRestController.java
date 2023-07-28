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

import com.omt.gjw.project.service.attraction.AttService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.att.AttReqDto;
import com.omt.gjw.project.web.dto.att.AttRespDto;
import com.omt.gjw.project.web.dto.att.CourseRespDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AttRestController {
	
	private final AttService attService;

	@Value("${file.path}")
	private String filePath;
	

	
	
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
	
	@GetMapping("/kdh-amusement/RcdCourse/{rideThemeCode}")
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
