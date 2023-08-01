package com.omt.gjw.project.domain.payment;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {
	
	private int user_code;
	private int ticket_code;
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
	
}
