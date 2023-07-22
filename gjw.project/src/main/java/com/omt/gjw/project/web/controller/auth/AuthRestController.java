package com.omt.gjw.project.web.controller.auth;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.handler.aop.annotation.ValidCheck;
import com.omt.gjw.project.service.auth.AuthService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthRestController {

	private final AuthService authService;
	
	@ValidCheck
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody @Valid SignupReqDto signupReqDto, BindingResult bindingResult) {
		System.out.println(signupReqDto);
		boolean status = false;
		try {
			status = authService.signup(signupReqDto);
			System.out.println("status: " + status);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "회원가입 실패", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 성공", status));
	}
	
	@ValidCheck
	@GetMapping("/signup/validation/userId")
	public ResponseEntity<?> checkUserId(@Valid UserIdCheckReqDto userIdCheckReqDto, BindingResult bindingResult) {
		
		boolean status = false;
		try {
			status = authService.checkUserByUserId(userIdCheckReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "서버오류", status));
		}
		
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "회원가입 가능여부", status));
	}
}
