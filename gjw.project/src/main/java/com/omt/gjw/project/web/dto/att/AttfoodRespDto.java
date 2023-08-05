package com.omt.gjw.project.web.dto.att;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AttfoodRespDto {
	private int snackCode;
	private String snackName;
	private String snackExplanation;
	private int snackSerivce;
}
