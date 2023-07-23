package com.omt.gjw.project.service.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.user.Region;
import com.omt.gjw.project.domain.user.RegionRepository;
import com.omt.gjw.project.domain.user.UserRepository;
import com.omt.gjw.project.web.dto.auth.GuListRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final UserRepository userRepository;
	private final RegionRepository regionRepository;
	
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

	@Override
	public List<GuListRespDto> getGuList(int siCode) throws Exception {
		List<Region> regions = regionRepository.getGuList(siCode);
		return createGuListRespDtos(regions);
	}
	
	private List<GuListRespDto> createGuListRespDtos(List<Region> regions) {
		List<GuListRespDto> guListRespDtos = new ArrayList<GuListRespDto>();
		regions.forEach(gu -> {
			guListRespDtos.add(gu.toGuDto());
		});
		return guListRespDtos;
	}

}
