package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AttFacility {
	private int service_code;
	private String service_name;
	private String service_explanation;
	private int service_service;
	
	public AttFacilityRespDto facilListDto() {
		return AttFacilityRespDto.builder()
				.serviceCode(service_code)
				.serviceName(service_name)
				.serviceExplanation(service_explanation)
				.serviceService(service_service)
				.build();
	}
}
