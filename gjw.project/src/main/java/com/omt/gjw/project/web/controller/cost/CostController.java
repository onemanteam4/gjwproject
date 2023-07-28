package com.omt.gjw.project.web.controller.cost;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/kdh-amusement")
public class CostController {
	
		@GetMapping("/feecard")
		public String loadFeeCard() {
			return "/kdh-amusement/feecard";
		}
		
		@GetMapping("/usefee")
		public String loadUseFee() {
			return "/kdh-amusement/usefee";
		}
	
}
