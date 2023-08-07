package com.omt.gjw.project.service.auth;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.user.User;
import com.omt.gjw.project.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {
	
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = null;
		try {
			userEntity = userRepository.findUserByUsername(username);
		} catch (Exception e) {
			e.printStackTrace();
			throw new UsernameNotFoundException(username);
		}
		
		if(userEntity == null) {
			throw new UsernameNotFoundException(username + "사용자이름을 사용할 수 없습니다.");
		}
		System.out.println("userEntity: " + userEntity);
		return new PrincipalDetails(userEntity);
		
	}
	
	public boolean checkPassword(String p1, String p2) {
		boolean status = false;
		status = passwordEncoder.matches(p1, p2);
		return status;
	}

}
