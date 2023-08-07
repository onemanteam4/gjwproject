package com.omt.gjw.project.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/grant/test")
public class GrantedTestController {
	
	@GetMapping("/user")
	public ResponseEntity<?> getUserData() {
		return ResponseEntity.ok("ROLE_USER 권한을 가지고 있음");
	}

	@GetMapping("/admin")
	public ResponseEntity<?> getAdminData() {
		return ResponseEntity.ok("ROLE_ADMIN 권한을 가지고 있음");
	}
}
