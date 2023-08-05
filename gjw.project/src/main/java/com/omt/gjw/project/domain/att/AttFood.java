package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.web.dto.att.AttfoodRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AttFood {
	private int snack_code;
	private String snack_name;
	private String snack_explanation;
	private int snack_service;
	
	public AttfoodRespDto foodListDto() {
		return AttfoodRespDto.builder()
				.snackCode(snack_code)
				.snackName(snack_name)
				.snackExplanation(snack_explanation)
				.snackSerivce(snack_service)
				.build();
	}
}
