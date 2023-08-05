package com.omt.gjw.project.service.client;

import java.util.List;

import com.omt.gjw.project.web.dto.noticeclient.ClientRespDto;
import com.omt.gjw.project.web.dto.noticeclient.CreateClientDto;

public interface ClientService {

	public boolean clientup(CreateClientDto createClientDto) throws Exception;
	
	public List<ClientRespDto> getClientList(int page, int contentCount) throws Exception;
	
	public boolean clientDelete (int clientCode) throws Exception;
	
	public List<ClientRespDto> getClientDetails(int clientCode) throws Exception;
}
