package com.omt.gjw.project.web.controller.rateinfo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RateInfoPageController {
	
	@GetMapping("/maincard")
	public String loadcard() {
		return "fee/feecard";
	}
	
	@GetMapping("/mainfee")
	public String loadfee() {
		return "fee/usefee";
	}
	
	@GetMapping("/mainprefer")
	public String loadprefer() {
		return "fee/preferential";
	}
	
	@GetMapping("/homediscount")
	public String loadhomediscount() {
		return "fee/homediscount";
	}
	
	@GetMapping("/carddiscount")
	public String loadcarddiscount() {
		return "fee/carddiscount";
	}
}
