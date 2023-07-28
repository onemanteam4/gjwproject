package com.omt.gjw.project.domain.att;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AttractionRepository {
	public List<Attraction> getRideList(int rideCode) throws Exception;
	
	public List<RcdCourse> getRcdList(String item) throws Exception;
	
	public int saveAtt(Attraction attraction) throws Exception;
}
