package com.omt.gjw.project.domain.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	public int save(User user) throws Exception;

	public User findUserByUsername(String username) throws Exception;
	
	public User findOAuth2UserByUsername(String oauth2_id) throws Exception;
	
	public int updateUser(User user) throws Exception;
	
	public int deleteUser(int userCode) throws Exception;
	
	public List<User> getUserGender(String gender) throws Exception;
}
