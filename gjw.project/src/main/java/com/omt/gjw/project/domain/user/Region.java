package com.omt.gjw.project.domain.user;

import com.omt.gjw.project.web.dto.auth.GuListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Region {

	private int region_code;
	private int region_si;
	private String region_si_name;
	private int region_gu;
	private String region_gu_name;
	
	public GuListRespDto toGuDto() {
		return GuListRespDto.builder()
				.regionCode(region_code)
				.regionGu(region_gu)
				.regionGuName(region_gu_name)
				.build();
	}
}
