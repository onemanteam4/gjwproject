package com.omt.gjw.project.service.payment;

import java.util.List;

import com.omt.gjw.project.web.dto.payment.TicketListRespDto;

public interface PaymentService {

	public List<TicketListRespDto> getTicketList(int typeCode, int typeNum) throws Exception;
	
}
