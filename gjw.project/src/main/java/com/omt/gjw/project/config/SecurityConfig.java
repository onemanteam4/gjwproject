package com.omt.gjw.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.omt.gjw.project.config.auth.AuthFailureHandler;
import com.omt.gjw.project.service.auth.PrincipalOauth2UserService;

import lombok.RequiredArgsConstructor;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	private final PrincipalOauth2UserService principalOauth2UserService;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		
		http.authorizeRequests()
		.antMatchers("/", "index")
		.authenticated()
		
		.anyRequest()
		.permitAll()
		.and()
		.formLogin()
		.loginPage("/auth/signin")
		.loginProcessingUrl("/auth/signin")
		.failureHandler(new AuthFailureHandler())
		
		.and()
		.oauth2Login()
		.userInfoEndpoint()
		.userService(principalOauth2UserService)
		.and()
		
		.defaultSuccessUrl("/")
		
		.and()
		.logout()
		.logoutUrl("/logout")
		.logoutSuccessUrl("/auth/signin");
		
	}
}
