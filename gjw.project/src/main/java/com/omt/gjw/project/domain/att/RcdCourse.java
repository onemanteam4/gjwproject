package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.web.dto.att.CourseRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class RcdCourse {
	private int ride_code;
	private String ride_name;
	private int ride_location_code;
	private String location_name;
	private int ride_theme_code;
	private String theme_name;
	private String ride_theme_family;
	private String ride_theme_friend;
	private String ride_theme_couple;
	private String ride_theme_thrill;
	private String ride_theme_rain;
	
	public CourseRespDto courseListDto() {
		return CourseRespDto.builder()
				.rideThemeCode(ride_theme_code)
				.themeName(theme_name)
				.rideCode(ride_code)
				.rideName(ride_name)
				.rideLocationCode(ride_location_code)
				.locationName(location_name)
				.rideThemeFamily(ride_theme_family)
				.rideThemeFriend(ride_theme_friend)
				.rideThemeCouple(ride_theme_couple)
				.rideThemeThrill(ride_theme_thrill)
				.rideThemeRain(ride_theme_rain)
				.build();
	}
}
