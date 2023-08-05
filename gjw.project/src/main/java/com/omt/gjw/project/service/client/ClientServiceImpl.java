package com.omt.gjw.project.service.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.client.Client;
import com.omt.gjw.project.domain.client.ClientRepository;
import com.omt.gjw.project.domain.noticelist.NoticeList;
import com.omt.gjw.project.web.dto.noticeclient.ClientRespDto;
import com.omt.gjw.project.web.dto.noticeclient.CreateClientDto;
import com.omt.gjw.project.web.dto.noticelist.NoticeListRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService{
	private final ClientRepository clientRepository;
	
	
	@Override
	public boolean clientup(CreateClientDto createClientDto) throws Exception {
		
		
		return clientRepository.clientSave(createClientDto.toEntity()) > 0;
	}
	
	
	@Override
	public List<ClientRespDto> getClientList(int page, int contentCount) throws Exception {
		
		List<Client> clientList = clientRepository.getClientList(createGetClientListMap(page, contentCount));
		
		return createClientListRespDtos(clientList);
	}
	
	
	
	private Map<String, Object> createGetClientListMap(int page, int contentCount) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalPage", (page -1)* contentCount);
		map.put("count", contentCount);
		return map;
	}
	
	
	private List<ClientRespDto> createClientListRespDtos(List<Client> clientList) {
		List<ClientRespDto> ClientListRespDtos = new ArrayList<ClientRespDto>();
		clientList.forEach(clients -> {
			ClientListRespDtos.add(clients.toListDto());
		});
		return ClientListRespDtos;
	}


	@Override
	public boolean clientDelete(int clientCode) throws Exception {
		
		return clientRepository.clientDelete(clientCode) > 0;
	}


	@Override
	public List<ClientRespDto> getClientDetails(int clientCode) throws Exception {
		
		 List<Client> ClientDetail = clientRepository.getClientDetails(GetClientListMap(clientCode));
		
		return createClientListRespDtos(ClientDetail);
	}
	

	private Map<String, Object> GetClientListMap(int clientCode) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("client_code", clientCode);
		
		return map;
	}
}
