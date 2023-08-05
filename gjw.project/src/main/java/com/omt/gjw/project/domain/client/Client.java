package com.omt.gjw.project.domain.client;

import java.time.LocalDateTime;

import com.omt.gjw.project.web.dto.noticeclient.ClientRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Client {
	private int client_code;
	private String client_division;
	private String client_service;
	private String client_name;
	private String visit_day;
	private String client_email;
	private String client_phone;
	private String client_gender;
	private String client_age;
	private String call_back;
	private String client_title;
	private String client_content;
	private String client_file;
	
	private int total_count;
	
	private LocalDateTime create_date;
	private LocalDateTime update_date;
	
	
	
	public ClientRespDto toListDto() {
		return ClientRespDto.builder()
				.clientCode(client_code)
				.clientDivision(client_division)
				.clientService(client_service)
				.clientName(client_name)
				.visitDay(visit_day)
				.clientEmail(client_email)
				.clientPhone(client_phone)
				.clientGender(client_gender)
				.clientAge(client_age)
				.callBack(call_back)
				.clientTitle(client_title)
				.clientContent(client_content)
				.clientFile(client_file)
				.totalCount(total_count)
				.createDate(create_date)
				.updateDate(update_date)
				.build();
	}
	
}
