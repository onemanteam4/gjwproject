package com.omt.gjw.project.web.controller.operation;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OperationPageController {
	
	@GetMapping("/hours-of-operation/operation")
	public String loadOperation() {
		return "hours-of-operation/operation";
	}
	
	@GetMapping("/hours-of-operation/operation-find")
	public String loadOperationFind() {
		return "hours-of-operation/operation-find";
	}
	
	@GetMapping("/hours-of-operation/operation-holiday")
	public String loadOperationHoliday() {
		return "hours-of-operation/operation-holiday";
	}
	
	@GetMapping("/hours-of-operation/operation-parking")
	public String loadOperationParking() {
		return "hours-of-operation/operation-parking";
	}
	
	@GetMapping("/hours-of-operation/operation-tip")
	public String loadOperationTip() {
		return "hours-of-operation/operation-tip";
	}
}
