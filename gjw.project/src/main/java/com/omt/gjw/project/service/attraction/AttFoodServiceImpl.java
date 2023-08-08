package com.omt.gjw.project.service.attraction;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.att.AttFacility;
import com.omt.gjw.project.domain.att.AttFood;
import com.omt.gjw.project.domain.att.AttractionRepository;
import com.omt.gjw.project.domain.att.FacilView;
import com.omt.gjw.project.domain.att.FoodRepository;
import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;
import com.omt.gjw.project.web.dto.att.AttfoodRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AttFoodServiceImpl implements AttFoodService{
	
	private final FoodRepository foodRepository;
	
	// 푸드 메인
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
	// 푸드 세부 설명
	@Override
	public List<AttfoodRespDto> getfoodView(int snackCode) throws Exception {

		List<AttFood> foodview = foodRepository.FoodViewList(snackCode);
		return createFoodViewDtos(foodview);
	}
	
	private List<AttfoodRespDto> createFoodViewDtos(List<AttFood> foodviews){
		List<AttfoodRespDto> foodviewDtos = new ArrayList<AttfoodRespDto>();
		
		foodviews.forEach(views -> {
			foodviewDtos.add(views.foodListDto());
		});
		return foodviewDtos;
	}
	


	// 부대시설 메인
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
	// 부대시설 세부 설명
	@Override
	public List<AttFacilityRespDto> getfacils(int serviceCode) throws Exception {

		List<FacilView> facilviewss = foodRepository.FacilViewList(serviceCode);
		
		return createViewFacilRespDtos(facilviewss);
	}
	private List<AttFacilityRespDto> createViewFacilRespDtos(List<FacilView> views){
		List<AttFacilityRespDto> viewfacilDtos = new ArrayList<AttFacilityRespDto>();
		
		views.forEach(viewss -> {
			viewfacilDtos.add(viewss.facilviews());
		});
		return viewfacilDtos;
	}
	
	
}
