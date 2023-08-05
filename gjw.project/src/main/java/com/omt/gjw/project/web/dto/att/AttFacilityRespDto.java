package com.omt.gjw.project.web.dto.att;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AttFacilityRespDto {
	private int serviceCode;
	private String serviceName;
	private String serviceExplanation;
	private int serviceService;
}
