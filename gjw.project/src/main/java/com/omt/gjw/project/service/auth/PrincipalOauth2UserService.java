package com.omt.gjw.project.service.auth;

import java.util.Map;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.user.User;
import com.omt.gjw.project.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class PrincipalOauth2UserService extends DefaultOAuth2UserService{
	
	private final UserRepository userRepository;
	
	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

		OAuth2User oAuth2User = super.loadUser(userRequest);
		log.info(">>>> ClientRegistration: {}", userRequest.getClientRegistration());
		log.info(">>>> oAuth2User : {}", oAuth2User);
		
		String provider = null;;
		ClientRegistration clientRegistration = userRequest.getClientRegistration();
		Map<String, Object> attributes = oAuth2User.getAttributes();
		
		provider = clientRegistration.getClientName();
		
		User user = getOauth2User(provider, attributes);
		
		return new PrincipalDetails(user, attributes);
	}
	
	private User getOauth2User(String provider, Map<String, Object> attributes) throws OAuth2AuthenticationException {
		
		User user = null;
		String oauth2_id = null;
		String id = null;
		Map<String, Object> response = null;
		Map<String, Object> profile = null;
		
		if(provider.equals("Naver")) {
			response = (Map<String, Object>)attributes.get("response");
			id = (String)response.get("id");
			return getNaver(provider, id, response);
		} else if (provider.equals("Kakao")){
			response = (Map<String, Object>)attributes.get("kakao_account");
			profile = (Map<String, Object>)response.get("profile");
			id = String.valueOf(attributes.get("id"));
			return getKakao(provider, id, response, profile);
		} else {
			throw new OAuth2AuthenticationException("DATABASE ERROR!");
		}
	}
	
	private User getNaver(String provider, String id, Map<String, Object> response) {
		
		User user = null;
		String oauth2_id = null;
		
		oauth2_id = (provider + "_" + id);
		
		try {
			user = userRepository.findOAuth2UserByUsername(oauth2_id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OAuth2AuthenticationException("DATABASE ERROR!");
		}
		
		if(user == null) {
			
			String birthDay = (String)response.get("birthday");
			birthDay = birthDay.replaceAll("-", "");
			
			String gen = (String)response.get("gender");
			if(gen.equals("M")) {
				gen = "남자";
			}else {
				gen = "여자";
			}
			
			
			
			user = User.builder()
					.user_name((String)response.get("name"))
					.user_id(oauth2_id)
					.oauth2_id(oauth2_id)
					.user_password(new BCryptPasswordEncoder().encode(id))
					.user_email((String)response.get("email"))
					.user_birth((String)response.get("birthyear")+birthDay)
					.user_phone((String)response.get("mobile"))
					.user_gender(gen)
					.region_code(1)
					.user_roles("ROLE_USER")
					.build();
			
			try {
				userRepository.save(user);
				user = userRepository.findOAuth2UserByUsername(oauth2_id);
			} catch (Exception e) {
				e.printStackTrace();
				throw new OAuth2AuthenticationException("DATABASE ERROR!");
			}
		}

		return user;
	}
	
	private User getKakao(String provider, String id, Map<String, Object> response, Map<String, Object> profile) {

		User user = null;
		String oauth2_id = null;
		
		oauth2_id = (provider + "_" + id);
		
		try {
			user = userRepository.findOAuth2UserByUsername(oauth2_id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new OAuth2AuthenticationException("DATABASE ERROR!");
		}
		
		if(user == null) {
			
			String gen = (String)response.get("gender");
			if(gen.equals("male")) {
				gen = "남자";
			}else {
				gen = "여자";
			}
			
			user = User.builder()
					.user_name((String)profile.get("nickname"))
					.user_id(oauth2_id)
					.oauth2_id(oauth2_id)
					.user_password(new BCryptPasswordEncoder().encode(id))
					.user_email((String)response.get("email"))
					.user_birth((String)response.get("birthday"))
					.user_gender(gen)
					.user_roles("ROLE_USER")
					.build();
			
			try {
				userRepository.save(user);
				user = userRepository.findOAuth2UserByUsername(oauth2_id);
			} catch (Exception e) {
				e.printStackTrace();
				throw new OAuth2AuthenticationException("DATABASE ERROR!");
			}
		}

		return user;
	}
	
	
}
