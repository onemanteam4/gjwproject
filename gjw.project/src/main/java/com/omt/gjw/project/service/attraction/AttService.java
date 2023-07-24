package com.omt.gjw.project.service.attraction;

import java.util.List;

import com.omt.gjw.project.webattraction.dto.att.AttRespDto;

public interface AttService {
	
	public List<AttRespDto> getRideList(int rideCode) throws Exception;
}
