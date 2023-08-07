package com.omt.gjw.project.web.controller.authclient;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminClientPageController {

	@GetMapping("/admin_client")
	public String loadList() {
		return "auth-client/admin_client";
	}
	
	@GetMapping("/auth_client_check/{clientCode}")
	public String loadCheck() {
		return "auth-client/auth_client_check";
	}
	
	
}
