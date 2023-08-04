package com.omt.gjw.project.web.controller.noticeclient;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.handler.aop.annotation.ValidCheck;
import com.omt.gjw.project.service.client.ClientService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.noticeclient.CreateClientDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/client")
@RequiredArgsConstructor
public class NoticeClientController {
	private final ClientService clientService;
	@ValidCheck
	@PostMapping("/clientup")
	public ResponseEntity<?> clientup(@RequestBody @Valid CreateClientDto createClientDto, BindingResult bindingResult) {
		boolean status = false;
		try {
			status = clientService.clientup(createClientDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "등록 실패", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "등록 성공", status));
	}
}
