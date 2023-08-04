package com.omt.gjw.project.web.dto.noticeclient;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.omt.gjw.project.domain.client.Client;

import lombok.Data;

@Data
public class CreateClientDto {

	@NotBlank
	private String clientDivision;
	@NotBlank
	private String clientService;
	@NotBlank
	@Pattern(regexp = "^[가-힣]*$", message = "한글만 입력가능합니다.")
	private String clientName;
	@NotBlank
	private String visitDay;
	@NotBlank
	@Email
	private String clientEmail;
	@NotBlank
	@Pattern(regexp = "^\\d{3}-\\d{3,4}-\\d{4}$", message = "휴대전화는 '-' 포함하여 입력해주세요.")
	private String clientPhone;
	@NotBlank
	private String clientGender;
	@NotBlank
	private String clientAge;
	@NotBlank
	private String callBack;
	@NotBlank
	private String clientTitle;
	@NotBlank
	private String clientContent;
	
	private String clientFile;
	
	
	@AssertTrue(message = "필수약관에 동의하지 않았습니다.") 
	private boolean checkagreeFlag;
	 
	
	
	public Client toEntity() {
		return Client.builder()
				.client_division(clientDivision)
				.client_service(clientService)
				.client_name(clientName)
				.visit_day(visitDay)
				.client_email(clientEmail)
				.client_phone(clientPhone)
				.client_gender(clientGender)
				.client_age(clientAge)
				.call_back(callBack)
				.client_title(clientTitle)
				.client_content(clientContent)
				.client_file(clientFile)
				.build();
				
	}
	
}
