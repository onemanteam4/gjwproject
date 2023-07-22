package com.omt.gjw.project.service.auth;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.user.UserRepository;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final UserRepository userRepository;
	
	@Override
	public boolean checkUserByUserId(UserIdCheckReqDto userIdCheckReqDto) throws Exception {
		System.out.println("서비스/ 아이디찾기" + userIdCheckReqDto.getUserId());
		System.out.println("서비스/ 아이디찾기/ true,false" + userRepository.findUserByUsername(userIdCheckReqDto.getUserId()));
		return userRepository.findUserByUsername(userIdCheckReqDto.getUserId()) == null;
	}

	@Override
	public boolean signup(SignupReqDto signupReqDto) throws Exception {
		System.out.println("서비스/ signup과정 entity: " + signupReqDto.toEntity());
		System.out.println("서비스/ signup과정 entity/ 저장여부: " + userRepository.save(signupReqDto.toEntity()));
		return userRepository.save(signupReqDto.toEntity()) > 0;
	}

}
