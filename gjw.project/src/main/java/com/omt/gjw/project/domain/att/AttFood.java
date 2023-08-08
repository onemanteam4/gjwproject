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
	private String snack_service;
	private int file_num;
	private String snack_Main_file;
	private int snack_num;
	private String snack_menu;
	private String snack_file;
	
	public AttfoodRespDto foodListDto() {
		return AttfoodRespDto.builder()
				.snackCode(snack_code)
				.snackName(snack_name)
				.snackExplanation(snack_explanation)
				.snackService(snack_service.equals("1") ? "운영중" : "")
				.fileNum(file_num)
				.snackMainFile(snack_Main_file)
				.snackNum(snack_num)
				.snackMenu(snack_menu)
				.snackFile(snack_file)
				.build();
	}
}
