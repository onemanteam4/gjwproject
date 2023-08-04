package com.omt.gjw.project.domain.client;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ClientRepository {
	public int clientSave(Client client) throws Exception;
	
}
