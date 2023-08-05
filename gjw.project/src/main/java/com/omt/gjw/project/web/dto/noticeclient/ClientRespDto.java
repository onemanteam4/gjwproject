package com.omt.gjw.project.web.dto.noticeclient;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data

public class ClientRespDto {

	private int clientCode;
	private String clientDivision;
	private String clientService;
	private String clientName;
	private String visitDay;
	private String clientEmail;
	private String clientPhone;
	private String clientGender;
	private String clientAge;
	private String callBack;
	private String clientTitle;
	private String clientContent;
	private String clientFile;
	private int totalCount;
	private LocalDateTime createDate;
	private LocalDateTime updateDate;
}
