package com.omt.gjw.project.web.dto.auth;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.omt.gjw.project.domain.user.User;

import lombok.Data;

@Data
public class UpdateUserReqDto {
	
	private int userCode;
	@NotBlank
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_+=])[a-zA-Z\\d-~!@#$%^&*_+=]{9,20}$", message = "영문자, 숫자, 특수문자를 모두 포함하여야합니다.")
	private String userPassword;
	@NotBlank
	@Email
	private String userEmail;
	private String userGender;
	private int regionCode;
	@AssertTrue(message = "필수약관에 동의하지 않았습니다.")
	private boolean checkagreeFlag;
	@AssertTrue(message = "비밀번호가 일치하지 않습니다.")
	private boolean passwordCheckFlag;
	
	public User updateToEntity() {
		return User.builder()
				.user_code(userCode)
				.user_password(new BCryptPasswordEncoder().encode(userPassword))
				.user_email(userEmail)
				.user_gender(userGender)
				.region_code(regionCode)
				.build();
	}
}
