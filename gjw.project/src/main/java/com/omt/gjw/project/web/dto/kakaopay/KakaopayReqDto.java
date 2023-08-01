package com.omt.gjw.project.web.dto.kakaopay;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
public class KakaopayReqDto {
	private String totalPrice;
	@AssertTrue(message = "방문자 이름을 입력해주세요.")
	private boolean visitNameFlag;
	@AssertTrue(message = "방문자 휴대전화를 '-'를 포함하여 작성해주세요.")
	private boolean visitPhoneFlag;
	@AssertTrue(message = "이메일정보를 입력해주세요.")
	private boolean visitEmailFlag;
}
