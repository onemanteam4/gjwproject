package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FacilView {
	private int service_code;
	private String service_name;
	private String service_explanation;
	private String service_service;
	private int file_num;
	private String service_file;
	
	public AttFacilityRespDto facilviews() {
		return AttFacilityRespDto.builder()
				.serviceCode(service_code)
				.serviceExplanation(service_explanation)
				.serviceName(service_name)
				.serviceService(service_service.equals("1") ? "운영중" : " ")
				.fileNum(file_num)
				.serviceFile(service_file)
				.build();
	}
}
