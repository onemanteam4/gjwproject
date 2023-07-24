package com.omt.gjw.project.webattraction.dto.att;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AttRespDto {
	private  int rideCode;
	private String rideName;
	private String rideExplanation;
	private int rideThemeFamily;
	private int rideThemeFriend;
	private int rideThemeCouple;
	private int rideThemeThrill;
	private int rideThemeRain;
	private int rideHeightMin;
	private int rideHeightMax;
	private int rideLocationCode;
	private int rideBoardingNum;
	private String rideExtra;
	private int rideStop;
}
