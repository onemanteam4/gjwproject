package com.omt.gjw.project.web.controller.rateinfo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.RateInfos.PreferService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.rate.PreferRespDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
public class RateInfoRestController {
	
	private final PreferService preferService;
	
	@GetMapping("/prefer")
	public ResponseEntity<?> preferList(){
		
		List<PreferRespDto> preferentialList = null;
		
		try {
			preferentialList = preferService.getprerferList();
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", preferentialList));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", preferentialList));
	}
}
