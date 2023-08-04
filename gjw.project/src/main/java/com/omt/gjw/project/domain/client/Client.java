package com.omt.gjw.project.domain.client;

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
}
