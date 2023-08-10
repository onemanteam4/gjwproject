package com.omt.gjw.project.domain.rate;

import com.omt.gjw.project.web.dto.rate.PreferRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Preferential {
	private int rate_code;
	private String discount_name;
	private String discount_explanation;
	private String file_name;
	
	
	public PreferRespDto preferListDto() {
		return PreferRespDto.builder()
				.rateCode(rate_code)
				.discountName(discount_name)
				.discountExplanation(discount_explanation)
				.fileName(file_name)
				.build();
	}
}
