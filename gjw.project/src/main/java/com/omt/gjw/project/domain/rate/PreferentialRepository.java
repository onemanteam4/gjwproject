package com.omt.gjw.project.domain.rate;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omt.gjw.project.web.dto.rate.PreferRespDto;

@Mapper
public interface PreferentialRepository {
	
	public List<Preferential> preferntialList() throws Exception;
}
