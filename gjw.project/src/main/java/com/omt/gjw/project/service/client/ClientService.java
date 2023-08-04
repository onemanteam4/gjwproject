package com.omt.gjw.project.service.client;

import com.omt.gjw.project.web.dto.noticeclient.CreateClientDto;

public interface ClientService {

	public boolean clientup(CreateClientDto createClientDto) throws Exception;
}
