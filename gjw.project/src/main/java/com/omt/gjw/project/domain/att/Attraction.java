package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.webattraction.dto.att.AttRespDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Attraction {
	private  int ride_code;
	private String ride_name;
	private String ride_explanation;
	private int ride_theme_family;
	private int ride_theme_friend;
	private int ride_theme_couple;
	private int ride_theme_thrill;
	private int ride_theme_rain;
	private int ride_height_min;
	private int ride_height_max;
	private int ride_location_code;
	private int ride_boarding_num;
	private String ride_extra;
	private int ride_stop;
	
	public AttRespDto attListDto() {
		return AttRespDto.builder()
				.rideCode(ride_code)
				.rideName(ride_name)
				.rideExplanation(ride_explanation)
				.rideLocationCode(ride_location_code)
				.build();
	}
}
