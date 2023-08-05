package com.omt.gjw.project.service.attraction;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.att.AttFacility;
import com.omt.gjw.project.domain.att.AttFood;
import com.omt.gjw.project.domain.att.AttractionRepository;
import com.omt.gjw.project.domain.att.FoodRepository;
import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;
import com.omt.gjw.project.web.dto.att.AttfoodRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AttFoodServiceImpl implements AttFoodService{
	
	private final FoodRepository foodRepository;
	
	@Override
	public List<AttfoodRespDto> getfoodList(int snackCode) throws Exception {
		
		List<AttFood> attfoods = foodRepository.getFoodList(snackCode);
		
		
		return createFoodRespDtos(attfoods);
	}
	
	private List<AttfoodRespDto> createFoodRespDtos(List<AttFood> foods){
		List<AttfoodRespDto> foodRespDtos = new ArrayList<AttfoodRespDto>();
		
		foods.forEach(foodss -> {
			foodRespDtos.add(foodss.foodListDto());
		});
		return foodRespDtos;

}

	
	@Override
	public List<AttFacilityRespDto> getfacil(int serviceCode) throws Exception {
		
		List<AttFacility> attfacility = foodRepository.getFacilList(serviceCode);
		
		return createfacilRespDtos(attfacility);
	}
	
	private List<AttFacilityRespDto> createfacilRespDtos(List<AttFacility> facils){
		List<AttFacilityRespDto> facilityDtos = new ArrayList<AttFacilityRespDto>();
		
		facils.forEach(facilss->{
			facilityDtos.add(facilss.facilListDto());
		});
		return facilityDtos;
	}
	
}
