package com.omt.gjw.project.domain.client;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.omt.gjw.project.web.dto.noticeclient.ClientRespDto;

@Mapper
public interface ClientRepository {
	public int clientSave(Client client) throws Exception;
	
	public List<Client> getClientList(Map<String, Object> map) throws Exception;
	
	public int clientDelete(int client_code) throws Exception;
	
	public List<Client> getClientDetails(Map<String, Object> map) throws Exception;
}
