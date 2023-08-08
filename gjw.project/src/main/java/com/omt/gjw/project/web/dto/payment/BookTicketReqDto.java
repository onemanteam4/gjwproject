package com.omt.gjw.project.web.dto.payment;

import com.omt.gjw.project.domain.payment.Order;

import lombok.Data;

@Data
public class BookTicketReqDto {
	
	private int userCode;
	private String buyDate;
	private int totalPrice;
	private int cardNum;
	private int uniformBNum;
	private int uniformSNum;
	private int kbBNum;
	private int kbSNum;
	private int onlineBNum;
	private int onlineMNum;
	private int onlineSNum;
	private int afterBNum;
	private int afterSNum;
	
	public Order toOrderEntity() {
		return Order.builder()
				.user_code(userCode)
				.ticket_code(1)
				.buy_date(buyDate)
				.total_price(totalPrice)
				.card_number(cardNum)
				.uniform_b_count(uniformBNum)
				.uniform_s_count(uniformSNum)
				.kb_b_count(kbBNum)
				.kb_s_count(kbSNum)
				.online_b_count(onlineBNum)
				.onlint_m_count(onlineMNum)
				.online_s_count(onlineSNum)
				.after_b_count(afterBNum)
				.after_s_count(afterSNum)
				.build();
	}
}
