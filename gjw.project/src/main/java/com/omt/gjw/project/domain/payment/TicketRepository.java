package com.omt.gjw.project.domain.payment;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TicketRepository {

	public List<Ticket> getTicketList(int typeCode, int typeNum) throws Exception;
	
}
