package com.omt.gjw.project.domain.att;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AttFile {
	private int file_code;
	private int ride_code;
	private String file_name;
}
