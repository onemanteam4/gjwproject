package com.omt.gjw.project.service.attraction;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import com.omt.gjw.project.domain.att.Attraction;
import com.omt.gjw.project.domain.att.AttractionRepository;
import com.omt.gjw.project.domain.att.MainAtt;
import com.omt.gjw.project.domain.att.RcdCourse;

import com.omt.gjw.project.web.dto.att.AttRespDto;
import com.omt.gjw.project.web.dto.att.AttSearchReqDto;
import com.omt.gjw.project.web.dto.att.CourseRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AttServiceImpl implements AttService{

	
	
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
	
		
		List<RcdCourse> course = attractionRepository.getRcdList(rideThemeCode);
		
		return createCourseRespDtos(course);
	}
	
	
	private List<CourseRespDto> createCourseRespDtos(List<RcdCourse> rcdc) {
		List<CourseRespDto> rcdcRespDtos = new ArrayList<CourseRespDto>();
		
		rcdc.forEach(rcdcs -> {
			rcdcRespDtos.add(rcdcs.courseListDto());
		});
		return rcdcRespDtos;
	}

	@Override
	public List<AttRespDto> getmainList(int rideCode) throws Exception {
		
		List<MainAtt> main = attractionRepository.getMainList(rideCode);	
		
		return createMainRespDtos(main);
	}
	
	private List<AttRespDto> createMainRespDtos(List<MainAtt> matt){
		List<AttRespDto> mattRespDtos = new ArrayList<AttRespDto>();
		
		matt.forEach(matts ->{
			mattRespDtos.add(matts.mainListDto());
			});	
		return mattRespDtos;
	}

	@Override
	public List<AttRespDto> getSearchList(AttSearchReqDto attSearchReqDto) throws Exception {
		List<MainAtt> mainsearch = attractionRepository.getSearchList(attSearchReqDto.toEntity());	

		
		
		return createSearchList(mainsearch, attSearchReqDto);
	}

	private List<AttRespDto> createSearchList(List<MainAtt> atts, AttSearchReqDto attSearchReqDto) {
		List<AttRespDto> dtos = new ArrayList<AttRespDto>();
		for(int i = 0; i < atts.size(); i++) {	
			int height = Integer.parseInt(attSearchReqDto.getHeight());
			
			if(attSearchReqDto.getRideThemeFamily().equals("1") && atts.get(i).getRide_theme_family().equals("1")) {
				if(height >= atts.get(i).getRide_height_min() && atts.get(i).getRide_height_max() >= height) {
					dtos.add(atts.get(i).mainListDto());
				}
			}else if(attSearchReqDto.getRideThemeCouple().equals("1") && atts.get(i).getRide_theme_couple().equals("1")) {
				if(height >= atts.get(i).getRide_height_min() && atts.get(i).getRide_height_max() >= height) {
					dtos.add(atts.get(i).mainListDto());
				}
			}else if(attSearchReqDto.getRideThemeFriend().equals("1") && atts.get(i).getRide_theme_friend().equals("1")) {
				if(height >= atts.get(i).getRide_height_min() && atts.get(i).getRide_height_max() >= height) {
					dtos.add(atts.get(i).mainListDto());
				}
			}else if(attSearchReqDto.getRideThemeRain().equals("1") && atts.get(i).getRide_theme_rain().equals("1")) {
				if(height >= atts.get(i).getRide_height_min() && atts.get(i).getRide_height_max() >= height) {
					dtos.add(atts.get(i).mainListDto());
				}
			}else if(attSearchReqDto.getRideThemeThrill().equals("1") && atts.get(i).getRide_theme_thrill().equals("1")) {
				if(height >= atts.get(i).getRide_height_min() && atts.get(i).getRide_height_max() >= height) {
					dtos.add(atts.get(i).mainListDto());
				}
			}
			
		}
		
		
		System.out.println(dtos);
		return dtos;
	}
}
	
	
	

	

	

	

	

