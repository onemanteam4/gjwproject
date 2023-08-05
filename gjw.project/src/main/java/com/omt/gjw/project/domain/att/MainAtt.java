package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.web.dto.att.AttRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class MainAtt {
	private  int ride_code;
	private String ride_name;
	private String ride_explanation;
	private String ride_theme_family;
	private String ride_theme_friend;
	private String ride_theme_couple;
	private String ride_theme_thrill;
	private String ride_theme_rain;
	private int ride_height_min;
	private int ride_height_max;
	private String ride_location_code;
	private int ride_boarding_num;
	private String ride_extra;
	private int ride_stop;
	private String location_name;
	private String height;
	
	public AttRespDto mainListDto() {
		return AttRespDto.builder()
				.rideCode(ride_code)
				.rideName(ride_name)
				.rideExplanation(ride_explanation)
				.rideLocationCode(ride_location_code)
				.locationName(location_name)
				.rideHeightMax(ride_height_max)
				.rideHeightMin(ride_height_min)
				.rideThemeFamily(ride_theme_family)
				.rideThemeFriend(ride_theme_friend)
				.rideThemeCouple(ride_theme_couple)
				.rideThemeThrill(ride_theme_thrill)
				.rideThemeRain(ride_theme_rain)
				.build();
						
	}
}
