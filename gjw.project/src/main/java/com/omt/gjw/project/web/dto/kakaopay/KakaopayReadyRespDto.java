package com.omt.gjw.project.web.dto.kakaopay;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class KakaopayReadyRespDto {
	private String tid;
	private String next_redirect_pc_url;
	private String created_at;
}
