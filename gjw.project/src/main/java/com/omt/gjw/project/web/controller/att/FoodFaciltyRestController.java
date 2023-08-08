package com.omt.gjw.project.web.controller.att;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.attraction.AttFoodService;
import com.omt.gjw.project.service.attraction.AttService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.att.AttFacilityRespDto;
import com.omt.gjw.project.web.dto.att.AttfoodRespDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
public class FoodFaciltyRestController {
	
	private final AttService attService;
	private final AttFoodService attFoodService;
	
	// 푸드 메인
	@GetMapping("/attfood/{snackCode}")
	public ResponseEntity<?> getfood(@PathVariable int snackCode){
		
		List<AttfoodRespDto> foodList = null;
		
		try {
			foodList = attFoodService.getfoodList(snackCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", foodList));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", foodList));
	}
	// 푸드 세부 설명
	@GetMapping("/snack/{snackCode}")
	public ResponseEntity<?> getfoodview(@PathVariable int snackCode){
		
		List<AttfoodRespDto> foodViews = null;
		
		try {
			foodViews = attFoodService.getfoodView(snackCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(1, "success", foodViews));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", foodViews));
	}
	// 부대시설 메인
	@GetMapping("/attservice/{serviceCode}")
	public ResponseEntity<?> getfacility(@PathVariable int serviceCode){
		
		List<AttFacilityRespDto> facilList = null;
				
		try {
			facilList = attFoodService.getfacil(serviceCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", facilList));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", facilList));
	}
	
	@GetMapping("/facilily/{serviceCode}")
	public ResponseEntity<?> getfacilview(@PathVariable int serviceCode){
		
		List<AttFacilityRespDto> facilviewList = null;
		
		try {
			facilviewList = attFoodService.getfacils(serviceCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", facilviewList));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", facilviewList));
	}
	
}
