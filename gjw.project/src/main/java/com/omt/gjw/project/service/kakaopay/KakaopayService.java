package com.omt.gjw.project.service.kakaopay;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.omt.gjw.project.web.dto.kakaopay.KakaopayApproveRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayReadyRespDto;
import com.omt.gjw.project.web.dto.kakaopay.KakaopayReqDto;

import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;

@Service
public class KakaopayService {
	
	private KakaopayReadyRespDto kakaopayReadyRespDto;
	private KakaopayApproveRespDto kakaopayApproveRespDto;
	
	public KakaopayReadyRespDto kakaopayReady(KakaopayReqDto kakaopayReqDto) {
		
		// 카카오 요구 헤더값
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", "KakaoAK b0c6b94cede4bb8620cca2a2ac640c43");
		headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
		
		String total = kakaopayReqDto.getTotalPrice();
		
		// 카카오페이 요청 양식
		MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
		params.add("cid", "TC0ONETIME");
		params.add("partner_order_id", "1001"); // 가맹점 주문 번호
		params.add("partner_user_id", "gjw"); // 가맹점 회원 ID
		params.add("item_name", "ticket"); // 상품명
		params.add("quantity", "1"); // 상품 수량
		params.add("total_amount", total); // 총금액
		params.add("tax_free_amount", "0"); // 부가세
		params.add("approval_url", "http://localhost:8000/kakaopay/success"); // 성공시 redirect url
		params.add("cancel_url", "http://localhost:8000/kakaopay/cancel"); // 취소시 redirect url
		params.add("fail_url", "http://localhost:8000/kakaopay/fail"); // 실패 시 redirect url
		
		//파라미터, 헤더
		HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
		//외부에 보낼 url
		RestTemplate restTemplate = new RestTemplate();
		
		kakaopayReadyRespDto = restTemplate.postForObject("https://kapi.kakao.com/v1/payment/ready", body, KakaopayReadyRespDto.class);
		
		return kakaopayReadyRespDto;
	}
	
	public KakaopayApproveRespDto kakaopayApprove(String pgToken) {
		
		// 카카오 요구 헤더값
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", ("KakaoAK b0c6b94cede4bb8620cca2a2ac640c43"));
		headers.add("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		
		// 카카오페이 요청 양식
		MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
		params.add("cid", "TC0ONETIME");
		params.add("tid", kakaopayReadyRespDto.getTid());
		params.add("partner_order_id", "1001"); // 가맹점 주문 번호
		params.add("partner_user_id", "gjw"); // 가맹점 회원 ID
		params.add("pg_token", pgToken);
		
		HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
		
		RestTemplate restTemplate = new RestTemplate();
		
		kakaopayApproveRespDto = restTemplate.postForObject("https://kapi.kakao.com/v1/payment/approve", body, KakaopayApproveRespDto.class);
		return kakaopayApproveRespDto;
	}
}
