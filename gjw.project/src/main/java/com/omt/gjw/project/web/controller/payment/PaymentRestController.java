package com.omt.gjw.project.web.controller.payment;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.payment.PaymentService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.payment.BookTicketReqDto;
import com.omt.gjw.project.web.dto.payment.TicketListRespDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentRestController {

	private final PaymentService paymentService;
	
	@GetMapping("/ticket/{typeCode}/{typeNum}")
	public ResponseEntity<?> ticketInfo(@PathVariable int typeCode, @PathVariable int typeNum) {
		List<TicketListRespDto> list = null;
		
		try {
			list = paymentService.getTicketList(typeCode, typeNum);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", list));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", list));
	}
	
	@PostMapping("/booking")
	public ResponseEntity<?> bookTicket(@RequestBody BookTicketReqDto bookTicketReqDto) {
		boolean status = false;
		
		try {
			status = paymentService.book(bookTicketReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "예매실패", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "예매성공", status));
	}
}
