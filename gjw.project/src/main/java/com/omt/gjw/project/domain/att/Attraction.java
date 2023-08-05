package com.omt.gjw.project.domain.att;

import com.omt.gjw.project.web.dto.att.AttRespDto;

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
	private int file_code;
	private String file_name;
	

	
	public AttRespDto attListDto() {
		return AttRespDto.builder()
				.rideCode(ride_code)
				.rideName(ride_name)
				.rideExplanation(ride_explanation)
				.rideThemeFamily(ride_theme_family.equals("1") ? "가족" : "")
				.rideThemeFriend(ride_theme_friend.equals("1") ? "친구" : "")
				.rideThemeCouple(ride_theme_couple.equals("1") ? "연인" : "")
				.rideThemeThrill(ride_theme_thrill.equals("1") ? "스릴" : "")
				.rideThemeRain(ride_theme_rain.equals("1") ? "우천시" : "")
				.rideHeightMin(ride_height_min)
				.rideHeightMax(ride_height_max)
				.rideLocationCode(ride_location_code.equals("1") ? "드라켄벨리" : 
									ride_location_code.equals("2") ? "엑스존" : 
									ride_location_code.equals("3") ? "패밀리어트랙션" :
									ride_location_code.equals("4") ? "위자드가든" : "")
				.rideBoardingNum(ride_boarding_num)
				.rideExtra(ride_extra)
				.fileCode(file_code)
				.fileName(file_name)
				.build();
	}
	
	
}
