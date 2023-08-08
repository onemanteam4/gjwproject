package com.omt.gjw.project.web.dto.auth;

import lombok.Data;

@Data
public class CheckUserTicketReqDto {
	private int userCode;
	private String selectedDay;
	private String anotherDay;
}
