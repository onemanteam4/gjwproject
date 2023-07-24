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
		return userRepository.findUserByUsername(userIdCheckReqDto.getUserId()) == null;
	}

	@Override
	public boolean signup(SignupReqDto signupReqDto) throws Exception {
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
