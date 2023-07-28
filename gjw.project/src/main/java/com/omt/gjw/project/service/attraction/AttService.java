package com.omt.gjw.project.service.attraction;

import java.util.List;

import com.omt.gjw.project.web.dto.att.AttReqDto;
import com.omt.gjw.project.web.dto.att.AttRespDto;
import com.omt.gjw.project.web.dto.att.CourseRespDto;

public interface AttService {
	
	
	public List<AttRespDto> getRideList(int rideCode) throws Exception;
	
	public List<CourseRespDto> getCourseList(int rideThemeCode) throws Exception;
	
	
}
