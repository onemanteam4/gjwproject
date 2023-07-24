package com.omt.gjw.project.webattraction.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("api/v1")
@Slf4j
@RequiredArgsConstructor
public class AttController {
	
	@GetMapping("/attraction/{rideCode}")
	public ResponseEntity<?> getridelist(@PathVariable int rideCode) {
		
		return null;
	}
	
}
