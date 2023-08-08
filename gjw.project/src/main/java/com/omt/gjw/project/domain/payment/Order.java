package com.omt.gjw.project.domain.payment;

import java.time.LocalDateTime;

import com.omt.gjw.project.web.dto.auth.CheckUserTicketRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {
	
	private int order_code;
	private int user_code;
	private int ticket_code;
	private String buy_date;
	private int total_price;
	private int card_number;
	private int uniform_b_count;
	private int uniform_s_count;
	private int kb_b_count;
	private int kb_s_count;
	private int online_b_count;
	private int onlint_m_count;
	private int online_s_count;
	private int after_b_count;
	private int after_s_count;
	private LocalDateTime create_date;
	
	public CheckUserTicketRespDto ticketToDto() {
		return CheckUserTicketRespDto.builder()
				.orderCode(order_code)
				.userCode(user_code)
				.buyDate(buy_date)
				.totalPrice(total_price)
				.cardNum(card_number)
				.uniformBCount(uniform_b_count)
				.uniformSCount(uniform_s_count)
				.kbBCount(kb_b_count)
				.kbSCount(kb_s_count)
				.onlineBCount(online_b_count)
				.onlineMCount(onlint_m_count)
				.onlineSCount(online_s_count)
				.afterBCount(after_b_count)
				.afterSCount(after_s_count)
				.build();
	}
	
}
