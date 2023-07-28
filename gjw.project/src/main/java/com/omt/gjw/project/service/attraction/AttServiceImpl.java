package com.omt.gjw.project.service.attraction;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.omt.gjw.project.domain.att.AttFile;
import com.omt.gjw.project.domain.att.Attraction;
import com.omt.gjw.project.domain.att.AttractionRepository;
import com.omt.gjw.project.domain.att.RcdCourse;
import com.omt.gjw.project.web.dto.att.AttReqDto;
import com.omt.gjw.project.web.dto.att.AttRespDto;
import com.omt.gjw.project.web.dto.att.CourseRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AttServiceImpl implements AttService{

	@Value("${file.path}")
	private String filePath;
	
	private final AttractionRepository attractionRepository;
	
	@Override
	public List<AttRespDto> getRideList(int rideCode) throws Exception {
		
		List<Attraction> atts = attractionRepository.getRideList(rideCode);
		
		return createAttRespDtos(atts);
	}
	
	private List<AttRespDto> createAttRespDtos(List<Attraction> atts) {
		List<AttRespDto> attRespDtos = new ArrayList<AttRespDto>();
		
		atts.forEach(att -> {
			attRespDtos.add(att.attListDto());
		});
		return attRespDtos;
	}
	
	//

	@Override
	public List<CourseRespDto> getCourseList(int rideThemeCode) throws Exception {
		
		String item = null;

	    if (rideThemeCode == 1) {
	        item = "rideThemeFamily";
	    } else if (rideThemeCode == 2) {
	        item = "rideThemeFriend";
	    } else if (rideThemeCode == 3) {
	        item = "rideThemeCouple";
	    } else if (rideThemeCode == 4) {
	        item = "rideThemeThrill";
	    } else if (rideThemeCode == 5) {
	        item = "rideThemeRain";
	    } else {
	        item = null;
	    }
	
		
		List<RcdCourse> course = attractionRepository.getRcdList(item);
		
		return createCourseRespDtos(course);
	}
	
	
	private List<CourseRespDto> createCourseRespDtos(List<RcdCourse> rcdc) {
		List<CourseRespDto> rcdcRespDtos = new ArrayList<CourseRespDto>();
		
		
		
		rcdc.forEach(rcdcs -> {
			rcdcRespDtos.add(rcdcs.courseListDto());
		});
		return rcdcRespDtos;
	}
	
	
	
	
	// 일단 냅두기
	

	

	

	
}
