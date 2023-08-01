package com.omt.gjw.project.web.dto.auth;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.omt.gjw.project.domain.user.User;

import lombok.Data;

@Data
public class DeleteUserReqDto {
	
	private int userCode;
	private String userId;
	private String userPassword;
	
	
	public User deleteToEntity() {
		return User.builder()
				.user_code(userCode)
				.user_id(userId)
				.user_password(new BCryptPasswordEncoder().encode(userPassword))
				.build();
	}
}
