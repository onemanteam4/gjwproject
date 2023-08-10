package com.omt.gjw.project.web.dto.rate;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PreferRespDto {
	private int rateCode;
	private String discountName;
	private String discountExplanation;
	private String fileName;

}
