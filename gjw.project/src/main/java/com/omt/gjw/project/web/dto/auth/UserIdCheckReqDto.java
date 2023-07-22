package com.omt.gjw.project.web.dto.auth;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class UserIdCheckReqDto {
	@NotBlank
	@Size(max = 10, min = 6)
	private String userId;
}
