package com.omt.gjw.project.service.auth;

import java.util.List;

import com.omt.gjw.project.web.dto.auth.DeleteUserReqDto;
import com.omt.gjw.project.web.dto.auth.GuListRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UpdateUserReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

public interface AuthService {
	public boolean checkUserByUserId(UserIdCheckReqDto userIdCheckReqDto) throws Exception;
	
	public boolean signup(SignupReqDto signupReqDto) throws Exception;
	
	public List<GuListRespDto> getGuList(int siCode) throws Exception;
	
	public boolean updateUser(UpdateUserReqDto updateUserReqDto) throws Exception;
	
	public boolean deleteUser(DeleteUserReqDto deleteUserReqDto) throws Exception;
}
