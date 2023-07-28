package com.omt.gjw.project.web.controller.kakaopay;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.kakaopay.KakaopayService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayApproveRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayReadyRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayReqDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@Controller
@RestController
@RequestMapping("/kakaopay")
@RequiredArgsConstructor
public class KakaopayController {
	
	private final KakaopayService kakaopayService;
	
	//결제 요청
	@PostMapping("/ready")
	public ResponseEntity<?> readyToKakaopay(@RequestBody KakaopayReqDto kakaopayReqDto) {
		KakaopayReadyRespDto kakaopayReadyRespDto = null;
		kakaopayReadyRespDto = kakaopayService.kakaopayReady(kakaopayReqDto);
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", kakaopayReadyRespDto));
	}
	
	
	@GetMapping("/success")
	public String kakaopaySuccess(@RequestParam("pg_token") String pgToken) {
//		KakaopayApproveRespDto kakaopayApproveRespDto = null;
//		kakaopayApproveRespDto = kakaopayService.kakaopayApprove(pgToken);

		return "kakaopay/success";
	}
	
}
