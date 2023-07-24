package com.omt.gjw.project.web.controller.payment;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/payment")
public class PaymentPageController {

	@GetMapping("/payment_first")
	public String loadPaymentFirst() {
		return "payment/payment_first";
	}
	
	@GetMapping("/payment_option")
	public String loadPaymentOption() {
		return "payment/payment_option";
	}
	
	@GetMapping("/payment_select")
	public String loadPaymentSelect() {
		return "payment/payment_select";
	}
	
	@GetMapping("/payment_pay")
	public String loadPaymentPay() {
		return "payment/payment_pay";
	}
	
}
