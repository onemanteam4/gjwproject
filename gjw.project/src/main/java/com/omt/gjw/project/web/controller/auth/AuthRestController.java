package com.omt.gjw.project.web.controller.auth;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.handler.aop.annotation.ValidCheck;
import com.omt.gjw.project.service.auth.AuthService;
import com.omt.gjw.project.service.auth.PrincipalDetails;
import com.omt.gjw.project.service.auth.PrincipalDetailsService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.auth.GuListRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthRestController {

	private final PrincipalDetailsService principalDetailsService;
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
	
	@GetMapping("/signup/{siCode}")
	public ResponseEntity<?> getGuList(@PathVariable int siCode) {
		List<GuListRespDto> list = null;
		try {
			list = authService.getGuList(siCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail to load", list));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success to load", list));
	}
	
	@GetMapping("/principal")
	public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		if(principalDetailsService == null) {
			return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "principal is null", null));
		}
		
		return ResponseEntity.ok(new CMRespDto<>(1, "success to load", principalDetails.getUser()));
	}
	
	
	
	
	
}
