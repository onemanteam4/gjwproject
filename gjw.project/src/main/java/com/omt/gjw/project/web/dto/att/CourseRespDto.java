package com.omt.gjw.project.web.dto.att;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CourseRespDto {
	private int rideThemeCode;
	private String themeName;
	
	private int rideCode;
	private String rideName;
	
	private int rideLocationCode;
	private String locationName;
	
	private String rideThemeFamily;
	private String rideThemeFriend;
	private String rideThemeCouple;
	private String rideThemeThrill;
	private String rideThemeRain;
	
}
