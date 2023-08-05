package com.omt.gjw.project.web.controller.authclient;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.service.client.ClientService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.noticeclient.ClientRespDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthClientRestController {
	
	private final ClientService clientService;
	@GetMapping("/get/client")
	public ResponseEntity<?> getClientList(@RequestParam int page, int contentCount) {
		List<ClientRespDto> list = null;
		
		try {
			list = clientService.getClientList(page, contentCount);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, page + "page list fail to load", list));
		}
		
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, page + "page list success to load", list));
	}
	
	@GetMapping("/get/clientdetails/{clientCode}")
	public ResponseEntity<?> getClientDetails(@PathVariable int clientCode) {
		
		List<ClientRespDto> details = null;
		
		try {
			details = clientService.getClientDetails(clientCode);
		} catch (Exception e) {
			
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", details));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", details));
	}
	
	
	
	@DeleteMapping("/client/delete")
	public ResponseEntity<?> removeClient(@RequestParam int clientCode) {
		boolean status = false;
		
		try {
			status = clientService.clientDelete(clientCode);
		} catch (Exception e) {
			e.printStackTrace();
			
			ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", status));
	}
}
