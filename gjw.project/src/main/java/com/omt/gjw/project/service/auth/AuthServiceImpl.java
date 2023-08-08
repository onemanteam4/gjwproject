package com.omt.gjw.project.service.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.omt.gjw.project.domain.payment.Order;
import com.omt.gjw.project.domain.payment.OrderRepository;
import com.omt.gjw.project.domain.user.Region;
import com.omt.gjw.project.domain.user.RegionRepository;
import com.omt.gjw.project.domain.user.User;
import com.omt.gjw.project.domain.user.UserRepository;
import com.omt.gjw.project.web.dto.auth.CheckUserTicketReqDto;
import com.omt.gjw.project.web.dto.auth.CheckUserTicketRespDto;
import com.omt.gjw.project.web.dto.auth.DeleteUserReqDto;
import com.omt.gjw.project.web.dto.auth.GuListRespDto;
import com.omt.gjw.project.web.dto.auth.SignupReqDto;
import com.omt.gjw.project.web.dto.auth.UpdateUserReqDto;
import com.omt.gjw.project.web.dto.auth.UserIdCheckReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final UserRepository userRepository;
	private final RegionRepository regionRepository;
	private final OrderRepository orderRepository;
	private final PrincipalDetailsService principalDetailsService;
	
	
	@Override
	public boolean checkUserByUserId(UserIdCheckReqDto userIdCheckReqDto) throws Exception {
		return userRepository.findUserByUsername(userIdCheckReqDto.getUserId()) == null;
	}

	@Override
	public boolean signup(SignupReqDto signupReqDto) throws Exception {
		return userRepository.save(signupReqDto.toEntity()) > 0;
	}

	@Override
	public List<GuListRespDto> getGuList(int siCode) throws Exception {
		List<Region> regions = regionRepository.getGuList(siCode);
		return createGuListRespDtos(regions);
	}
	
	private List<GuListRespDto> createGuListRespDtos(List<Region> regions) {
		List<GuListRespDto> guListRespDtos = new ArrayList<GuListRespDto>();
		regions.forEach(gu -> {
			guListRespDtos.add(gu.toGuDto());
		});
		return guListRespDtos;
	}

	@Override
	public boolean updateUser(UpdateUserReqDto updateUserReqDto) throws Exception {
		return userRepository.updateUser(updateUserReqDto.updateToEntity()) > 0;
	}

	@Override
	public boolean deleteUser(DeleteUserReqDto deleteUserReqDto) throws Exception {
		User user = null;
		boolean status = false;
		user = userRepository.findUserByUsername(deleteUserReqDto.getUserId());
		status = principalDetailsService.checkPassword(deleteUserReqDto.getUserPassword(), user.getUser_password());
		if(status) {
			return userRepository.deleteUser(deleteUserReqDto.getUserCode()) > 0;
		}else {
			return false;
		}
	}

	@Override
	public List<CheckUserTicketRespDto> getUserTicket(CheckUserTicketReqDto checkUserTicketReqDto) throws Exception {
		List<Order> orders = orderRepository.checkTicket(checkUserTicketReqDto.getUserCode());
		String preDate = checkUserTicketReqDto.getSelectedDay();
		String nextDate = checkUserTicketReqDto.getAnotherDay();
		selectTicket(orders, preDate, nextDate);
		
		return selectTicket(orders, preDate, nextDate);
	}
	
	private List<CheckUserTicketRespDto> selectTicket(List<Order> orders, String preDate, String nextDate) {
		List<CheckUserTicketRespDto> dtos = new ArrayList<CheckUserTicketRespDto>();
		for(int i = 0; i < orders.size(); i++) {
			String buyDate = orders.get(i).getBuy_date();
			
			int year = Integer.parseInt(buyDate.substring(0, 4));
			int month = Integer.parseInt(buyDate.substring(5, 7));
			int date = Integer.parseInt(buyDate.substring(8, 10));

			int preYear = Integer.parseInt(preDate.substring(0, 4));
			int preMonth = Integer.parseInt(preDate.substring(5, 7));
			int preDay = Integer.parseInt(preDate.substring(8, 10));

			int nextYear = Integer.parseInt(nextDate.substring(0, 4));
			int nextMonth = Integer.parseInt(nextDate.substring(5, 7));
			int nextDay = Integer.parseInt(nextDate.substring(8, 10));
			
			if(year == preYear && year == nextYear) {
				if(month > preMonth && month < nextMonth) {
					dtos.add(orders.get(i).ticketToDto());
				}else if(month == preMonth && date >= preDay) {
					dtos.add(orders.get(i).ticketToDto());
				}else if(month == nextMonth && date <= nextDay) {
					dtos.add(orders.get(i).ticketToDto());
				}
			}else if(year == preYear && year < nextYear) {
				if(year == preYear && month > preMonth) {
					dtos.add(orders.get(i).ticketToDto());
				}else if(year == preYear && month == preMonth && date >= preDay) {
					dtos.add(orders.get(i).ticketToDto());
				}
			}else if(year > preYear && year == nextYear) {
				if(year == nextYear && month < nextMonth) {
					dtos.add(orders.get(i).ticketToDto());
				}else if(year == nextYear && month == nextMonth && date <= nextDay) {
					dtos.add(orders.get(i).ticketToDto());
				}
			}

		}
		return dtos;
	}

	@Override
	public CheckUserTicketRespDto getTicketInfo(int orderCode) throws Exception {
		CheckUserTicketRespDto checkUserTicketRespDto = null;
		checkUserTicketRespDto = orderRepository.getTicketInfo(orderCode).ticketToDto();
		
		return checkUserTicketRespDto;
	}

	@Override
	public List<CheckUserTicketRespDto> getAllTicket(String year) throws Exception {
		List<Order> orders = null;
		orders = orderRepository.getAllTicket(year);
		
		return createAllTicket(orders, year);
	}
	
	private List<CheckUserTicketRespDto> createAllTicket(List<Order> orders, String year) {
		List<CheckUserTicketRespDto> dtos = new ArrayList<CheckUserTicketRespDto>();
		
		for(int i = 0; i < orders.size(); i++) {
			String buyDate = orders.get(i).getBuy_date();
			
			int buyYear = Integer.parseInt(buyDate.substring(0, 4));
			int buyMonth = Integer.parseInt(buyDate.substring(5, 7));
			int getYear = Integer.parseInt(year.substring(0, 4));
			int getMonth = Integer.parseInt(year.substring(5, 7));
			
			if(getYear == buyYear && getMonth == buyMonth) {
				dtos.add(orders.get(i).ticketToDto());
			}
			
		}
		
		return dtos;
	}

	@Override
	public int getUserGender(String gender) throws Exception {
		List<User> list = null;
		list = userRepository.getUserGender(gender);
		System.out.println(list.size());
		return list.size();
	}

}
