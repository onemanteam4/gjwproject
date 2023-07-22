package com.omt.gjw.project.service.auth;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.user.User;
import com.omt.gjw.project.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {
	
	private final UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = null;
		System.out.println("username: " + username);
		try {
			userEntity = userRepository.findUserByUsername(username);
			System.out.println("userentity: " + userEntity);
		} catch (Exception e) {
			e.printStackTrace();
			throw new UsernameNotFoundException(username);
		}
		
		if(userEntity == null) {
			throw new UsernameNotFoundException(username + "사용자이름을 사용할 수 없습니다.");
		}
		
		return new PrincipalDetails(userEntity);
		
	}

}
