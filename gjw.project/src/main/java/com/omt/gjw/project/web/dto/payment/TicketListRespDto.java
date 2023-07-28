package com.omt.gjw.project.web.dto.payment;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TicketListRespDto {

	private int typeCode;
	private int typeNum;
	private int typeRegularPrice;
	private int typeDiscountedPrice;
	private int typePrice;
	private String typeName;
}
