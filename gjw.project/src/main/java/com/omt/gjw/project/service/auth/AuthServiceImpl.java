package com.omt.gjw.project.service.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.user.Region;
import com.omt.gjw.project.domain.user.RegionRepository;
import com.omt.gjw.project.domain.user.User;
import com.omt.gjw.project.domain.user.UserRepository;
import com.omt.gjw.project.web.dto.auth.DeleteUserReqDto;
import com.omt.gjw.project.web.dto.auth.GuListRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UpdateUserReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final UserRepository userRepository;
	private final RegionRepository regionRepository;
	private final PrincipalDetailsService principalDetailsService;
	
	
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

	@Override
	public boolean updateUser(UpdateUserReqDto updateUserReqDto) throws Exception {
		return userRepository.updateUser(updateUserReqDto.updateToEntity()) > 0;
	}

	@Override
	public boolean deleteUser(DeleteUserReqDto deleteUserReqDto) throws Exception {
		User user = null;
		boolean status = false;
		user = userRepository.findUserByUsername(deleteUserReqDto.getUserId());
		status = principalDetailsService.checkPassword(deleteUserReqDto.getUserPassword(), user.getUser_password());
		if(status) {
			return userRepository.deleteUser(deleteUserReqDto.getUserCode()) > 0;
		}else {
			return false;
		}
	}

	
	
	
	
	
	
	
	
	
	
}
