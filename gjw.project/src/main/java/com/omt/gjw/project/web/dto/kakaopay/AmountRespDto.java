package com.omt.gjw.project.web.dto.kakaopay;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class AmountRespDto {
	
	private int total;
	private int tax_free;
	private int tax;
	private int point;
	private int discount;
	private int green_deposit;
}
