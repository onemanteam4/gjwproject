package com.omt.gjw.project.web.controller.auth;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omt.gjw.project.handler.aop.annotation.ValidCheck;
import com.omt.gjw.project.service.auth.AuthService;
import com.omt.gjw.project.service.auth.PrincipalDetails;
import com.omt.gjw.project.service.auth.PrincipalDetailsService;
import com.omt.gjw.project.web.dto.CMRespDto;
import com.omt.gjw.project.web.dto.auth.CheckUserTicketReqDto;
import com.omt.gjw.project.web.dto.auth.CheckUserTicketRespDto;
import com.omt.gjw.project.web.dto.auth.DeleteUserReqDto;
import com.omt.gjw.project.web.dto.auth.GuListRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UpdateUserReqDto;
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
		boolean status = false;
		try {
			status = authService.signup(signupReqDto);
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
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "fail to load", list));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success to load", list));
	}
	
	@ValidCheck
	@PutMapping("/mypage/modify/{userCode}")
	public ResponseEntity<?> updateUser(@RequestBody @Valid UpdateUserReqDto updateUserReqDto, BindingResult bindingResult) {
		boolean status = false;
		
		try {
			status = authService.updateUser(updateUserReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "UPDATE FAILED", status));
		}
		
		return ResponseEntity.ok().body(new CMRespDto<>(1, "UPDATE SUCCESS", status));
	}
	
	@DeleteMapping("/mypage/leave/{userCode}")
	public ResponseEntity<?> deleteUser(@RequestBody DeleteUserReqDto deleteUserReqDto) {
		boolean status = false;
		try {
			status = authService.deleteUser(deleteUserReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "DELETE FAILED", status));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "DELETE SUCCESS", status));
	}
	
	@GetMapping("/mypage/checkTicket")
	public ResponseEntity<?> getUserTicket(CheckUserTicketReqDto checkUserTicketReqDto) {
		List<CheckUserTicketRespDto> list = null;
		try {
			list = authService.getUserTicket(checkUserTicketReqDto);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", list));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", list));
	}
	
	@GetMapping("/mypage/ticketInfo/{orderCode}")
	public ResponseEntity<?> getTicketInfo(@PathVariable int orderCode) {
		CheckUserTicketRespDto respDto = null;
		try {
			respDto = authService.getTicketInfo(orderCode);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", respDto));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", respDto));
	}
	
	@GetMapping("/admin/getAllTicket/{year}")
	public ResponseEntity<?> getAllTicket(@PathVariable String year) {
		List<CheckUserTicketRespDto> list = null;
		try {
			list = authService.getAllTicket(year);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", list.size()));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", list.size()));
	}
	
	@GetMapping("/admin/userInfo/{gender}")
	public ResponseEntity<?> getUserGender(@PathVariable String gender) {
		int count = 0;
		try {
			count = authService.getUserGender(gender);
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.ok().body(new CMRespDto<>(-1, "failed", count));
		}
		return ResponseEntity.ok().body(new CMRespDto<>(1, "success", count));
	}
	
	
	@GetMapping("/principal")
	public ResponseEntity<?> getPrincipal(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		if(principalDetailsService == null) {
			return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "principal is null", null));
		}
		
		return ResponseEntity.ok(new CMRespDto<>(1, "success to load", principalDetails.getUser()));
	}
	
	@GetMapping("/principal/password")
	public ResponseEntity<?> getPrincipalPassword(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		if(principalDetailsService == null) {
			return ResponseEntity.badRequest().body(new CMRespDto<>(-1, "principal is null", null));
		}
		
		return ResponseEntity.ok(new CMRespDto<>(1, "success to load", principalDetails.getPassword()));
	}
	
	
	
}
