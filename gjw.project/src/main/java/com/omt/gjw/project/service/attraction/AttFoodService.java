package com.omt.gjw.project.service.attraction;

import java.util.List;

import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;
import com.omt.gjw.project.web.dto.att.AttfoodRespDto;

public interface AttFoodService {
	public List<AttfoodRespDto> getfoodList(int snackCode) throws Exception;
	
	public List<AttFacilityRespDto> getfacil(int serviceCode) throws Exception;
}
