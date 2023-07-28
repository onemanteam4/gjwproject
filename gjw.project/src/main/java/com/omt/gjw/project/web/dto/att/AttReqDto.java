package com.omt.gjw.project.web.dto.att;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class AttReqDto {
	
	private int fileCode;
	private int rideCode;
	private String rideName;
	
	private List<MultipartFile> file;
}
