package com.omt.gjw.project.web.dto.auth;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class GuListRespDto {
	
	private int regionCode;
	private int regionGu;
	private String regionGuName;
}
