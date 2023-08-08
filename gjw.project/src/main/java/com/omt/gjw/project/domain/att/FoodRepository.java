package com.omt.gjw.project.domain.att;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FoodRepository {
	public List<AttFood> getFoodList(int snackCode) throws Exception;
	
	public List<AttFacility> getFacilList(int serviceCode) throws Exception;
	
	public List<AttFood> FoodViewList(int snackCode) throws Exception;
	
	public List<FacilView> FacilViewList(int serviceCode) throws Exception;
}
