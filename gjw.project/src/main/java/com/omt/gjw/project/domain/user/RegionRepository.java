package com.omt.gjw.project.domain.user;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RegionRepository {
	
	public List<Region> getGuList(int siCode) throws Exception;
}
