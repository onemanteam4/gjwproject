package com.omt.gjw.project.web.dto.auth;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.omt.gjw.project.domain.user.User;

import lombok.Data;

@Data
public class SignupReqDto {
	
	@NotBlank
	@Pattern(regexp = "^[a-zA-Z]{1}[a-zA-Z0-9]{5,9}$", message = "6에서 10자 이내 입력이 가능합니다.")
	private String userId;
	@NotBlank
	@Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_+=])[a-zA-Z\\d-~!@#$%^&*_+=]{9,20}$", message = "영문자, 숫자, 특수문자를 모두 포함하여야합니다.")
	private String userPassword;
	@NotBlank
	@Email
	private String userEmail;
	@NotBlank
	@Pattern(regexp = "^[가-힣]*$", message = "한글만 입력가능합니다.")
	private String userName;
	private String userGender;
	@NotBlank
//	@Pattern(regexp = "(19|20)\\\\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])", message = "YYYYMMDD 형식으로 작성바랍니다.")
	private String userBirth;
	@NotBlank
//	@Pattern(regexp = "^\d{3}-\d{4}-\d{4}$", message = "휴대전화는 '-'없이 입력해주세요.")
	private String userPhone;
	private int regionCode;
	private String userRoles;
	@AssertTrue(message = "아이디 중복확인이 되지 않았습니다.")
	private boolean checkUsernameFlag;
	@AssertTrue(message = "필수약관에 동의하지 않았습니다.")
	private boolean checkagreeFlag;
	@AssertTrue(message = "비밀번호가 일치하지 않습니다.")
	private boolean passwordCheckFlag;
	
	public User toEntity() {
		return User.builder()
				.user_id(userId)
				.user_password(new BCryptPasswordEncoder().encode(userPassword))
				.user_email(userEmail)
				.user_name(userName)
				.user_gender(userGender)
				.user_birth(userBirth)
				.user_phone(userPhone)
				.region_code(regionCode)
				.user_roles(userRoles)
				.build();
				
	}
}
