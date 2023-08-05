package com.omt.gjw.project.domain.att;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.omt.gjw.project.web.dto.att.AttSearchReqDto;

@Mapper
public interface AttractionRepository {
	public List<Attraction> getRideList(int rideCode) throws Exception;
	
	public List<RcdCourse> getRcdList(int rideThemeCode) throws Exception;
	
	public int saveAtt(Attraction attraction) throws Exception;
	
	public List<MainAtt> getMainList (int rideCode) throws Exception;
	
	public List<MainAtt> getSearchList (MainAtt mainAtt) throws Exception;
	
	
}
