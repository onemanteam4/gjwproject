package com.omt.gjw.project.web.dto.att;

import java.util.List;
import java.util.Map;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AttRespDto {
	private  int rideCode;
	private String rideName;
	private String rideExplanation;
	private String rideThemeFamily;
	private String rideThemeFriend;
	private String rideThemeCouple;
	private String rideThemeThrill;
	private String rideThemeRain;
	private int rideHeightMin;
	private int rideHeightMax;
	private String rideLocationCode;
	private int rideBoardingNum;
	private String rideExtra;
	private int rideStop;
	private String locationName;
	
}
