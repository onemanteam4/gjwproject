package com.omt.gjw.project.service.RateInfos;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.rate.Preferential;
import com.omt.gjw.project.domain.rate.PreferentialRepository;
import com.omt.gjw.project.web.dto.rate.PreferRespDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PreferServiceImpl implements PreferService {
	
	private final PreferentialRepository preferentialRepository;
	
	@Override
	public List<PreferRespDto> getprerferList() throws Exception {
		
		List<Preferential> prefers = preferentialRepository.preferntialList();
		
		return ListpreferDtos(prefers);
	}
	
	private List<PreferRespDto> ListpreferDtos(List<Preferential> Preferentials){
		
		List<PreferRespDto> getprefers = new ArrayList<PreferRespDto>();
		
		Preferentials.forEach(preferentialss -> {
			getprefers.add(preferentialss.preferListDto());
		});
		return getprefers;
	}

}
