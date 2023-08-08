package com.omt.gjw.project.web.controller.rateinfo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RateInfoPageController {
	
	@GetMapping("/maincard")
	public String loadcard() {
		return "/fee/feecard";
	}
	
	@GetMapping("/mainfee")
	public String loadfee() {
		return "/fee/usefee";
	}
}
