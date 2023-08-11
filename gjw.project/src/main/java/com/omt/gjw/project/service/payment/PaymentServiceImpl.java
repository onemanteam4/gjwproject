package com.omt.gjw.project.service.payment;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.payment.OrderRepository;
import com.omt.gjw.project.domain.payment.Ticket;
import com.omt.gjw.project.domain.payment.TicketRepository;
import com.omt.gjw.project.web.dto.payment.BookTicketReqDto;
import com.omt.gjw.project.web.dto.payment.TicketListRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

	private final TicketRepository ticketRepository;
	private final OrderRepository orderRepository;

	// 티켓정보 리스트 가져오기
	@Override
	public List<TicketListRespDto> getTicketList(int typeCode, int typeNum) throws Exception {
		List<Ticket> tickets = ticketRepository.getTicketList(typeCode, typeNum);
		return createTicketListRespDtos(tickets);
	}
	
	// 가져온 리스트 Resp에 넣기
	private List<TicketListRespDto> createTicketListRespDtos(List<Ticket> tickets) {
		List<TicketListRespDto> ticketListRespDtos = new ArrayList<TicketListRespDto>();
		tickets.forEach(ticket -> {
			ticketListRespDtos.add(ticket.toTicketDto());
		});
		return ticketListRespDtos;
	}

	// 티켓 구매시 저장
	@Override
	public boolean book(BookTicketReqDto bookTicketReqDto) throws Exception {
		return orderRepository.book(bookTicketReqDto.toOrderEntity()) > 0;
	}

	
	
	

}
