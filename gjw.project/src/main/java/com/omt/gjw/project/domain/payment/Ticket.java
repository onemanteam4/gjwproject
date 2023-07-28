package com.omt.gjw.project.domain.payment;

import com.omt.gjw.project.web.dto.payment.TicketListRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Ticket {

	private int ticket_tablecode;
	private int ticket_code;
	private int type_code;
	private int type_num;
	private int type_regular_price;
	private int type_discounted_price;
	private int type_price;
	private String type_name;
	
	public TicketListRespDto toTicketDto() {
		return TicketListRespDto.builder()
				.typeCode(type_code)
				.typeNum(type_num)
				.typeRegularPrice(type_regular_price)
				.typeDiscountedPrice(type_discounted_price)
				.typePrice(type_price)
				.typeName(type_name)
				.build();
	}
}
