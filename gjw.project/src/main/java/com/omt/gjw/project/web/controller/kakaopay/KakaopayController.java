package com.omt.gjw.project.web.controller.kakaopay;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.handler.aop.annotation.ValidCheck;
import com.omt.gjw.project.service.kakaopay.KakaopayService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayApproveRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayReadyRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayReqDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@Controller
//@RestController
@RequestMapping("/kakaopay")
@RequiredArgsConstructor
public class KakaopayController {
	
	private final KakaopayService kakaopayService;
	
	//결제 요청
	@ValidCheck
	@PostMapping("/ready")
	public ResponseEntity<?> readyToKakaopay(@RequestBody @Valid KakaopayReqDto kakaopayReqDto, BindingResult bindingResult) {
		KakaopayReadyRespDto kakaopayReadyRespDto = null;
		kakaopayReadyRespDto = kakaopayService.kakaopayReady(kakaopayReqDto);
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", kakaopayReadyRespDto));
	}
	
	
	@GetMapping("/success")
	public void kakaopaySuccess(@RequestParam("pg_token") String pgToken, Model model) {
		KakaopayApproveRespDto kakaopayApproveRespDto = null;
		kakaopayApproveRespDto = kakaopayService.kakaopayApprove(pgToken);
		model.addAttribute("info", kakaopayApproveRespDto);
		
	}
	
}
