package com.omt.gjw.project.web.dto.att;

import com.omt.gjw.project.domain.att.MainAtt;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class AttSearchReqDto {
	private String rideThemeFamily;
	private String rideThemeFriend;
	private String rideThemeCouple;
	private String rideThemeThrill;
	private String rideThemeRain;
	private String height;
	
	public MainAtt toEntity() {
		return MainAtt.builder()
				.ride_theme_family(rideThemeFamily)
				.ride_theme_friend(rideThemeFriend)
				.ride_theme_couple(rideThemeCouple)
				.ride_theme_rain(rideThemeRain)
				.ride_theme_thrill(rideThemeThrill)
				.height(height)
				.build();
	}
}
