package com.omt.gjw.project.domain.payment;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface OrderRepository {
	public int book(Order order) throws Exception;
}
