package com.omt.gjw.project.service.client;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.client.ClientRepository;
import com.omt.gjw.project.web.dto.noticeclient.CreateClientDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService{
	private final ClientRepository clientRepository;
	@Override
	public boolean clientup(CreateClientDto createClientDto) throws Exception {
		
		
		return clientRepository.clientSave(createClientDto.toEntity()) > 0;
	}

}
