package com.omt.gjw.project.web.dto.auth;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CheckUserTicketRespDto {
	
	private int orderCode;
	private int userCode;
	private String buyDate;
	private int totalPrice;
	private int cardNum;
	private int uniformBCount;
	private int uniformSCount;
	private int kbBCount;
	private int kbSCount;
	private int onlineBCount;
	private int onlineMCount;
	private int onlineSCount;
	private int afterBCount;
	private int afterSCount;
}
