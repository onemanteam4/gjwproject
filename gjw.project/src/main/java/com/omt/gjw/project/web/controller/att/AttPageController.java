package com.omt.gjw.project.web.controller.att;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AttPageController {
	
	
	@GetMapping("/maincourse")
	public String loadRcdCourse() {
		return "kdh-amusement/RcdCourse";
	}
	
	@GetMapping("/attride/{rideCode}")
	public String loadattview() {
		return "viewpage/attview50";
	}
	
	@GetMapping("/course/{courseNum}")
	public String loadcourse() {
		return "kdh-amusement/RcdCourse";
	}
	
	@GetMapping("/mainattraction")
	public String loadMain() {
		return "kdh-amusement/attraction";
	}
	
	@GetMapping("/mainfood")
	public String loadfood() {
		return "kdh-amusement/attfood";
	}
	
	@GetMapping("/mainservice")
	public String loadservice() {
		return "kdh-amusement/attfacility";
	}
	
	@GetMapping("/foodview/{snackCode}")
	public String loadfoodview() {
		return "viewpage/foodview";
	}
	
	@GetMapping("/facilityview/{serviceCode}")
	public String loadfacilityview() {
		return "viewpage/facilityview";
	}
	
}
