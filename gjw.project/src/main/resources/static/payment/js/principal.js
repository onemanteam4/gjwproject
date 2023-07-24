function getPrincipal() {
	let user = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/principal",
		dataType: "json",
		success: (response) => {
			console.log("hi");
			user = response.data;
		},
		error: (error) => {
			console.log(error);
		}
	});
	return user;
}

function loadHeader(user) {
	const navMenu = document.querySelector(".nav-menu");
	
	if(user == null) {
		navMenu.innerHTML = `
		<ul>
	        <li class="nav-ticket">
	            <a href="/payment/payment_first">
	                <img src="/static/donguk-img/util_icon_regi.png" alt="통합예매">
	                통합예매
	            </a>
	        </li>
	        <li class="nav-login">
	            <a href="/auth/signin">
	                <img src="/static/donguk-img/util_icon_in.png" alt="로그인">
	                로그인
	            </a>
	        </li>
	    </ul>
		`
	} else {
		navMenu.innerHTML = `
		<ul>
	        <li class="nav-ticket">
	            <a href="/payment/payment_first">
	                <img src="/static/donguk-img/util_icon_regi.png" alt="통합예매">
	                통합예매
	            </a>
	        </li>
	        <li class="nav-mypage">
	            <a href="/auth/mypage">
	                <img src="/static/donguk-img/util_icon_person.png" alt="마이페이지">
	                마이페이지
	            </a>
	        </li>
	        <li class="nav-logout">
	            <a href="/logout">
	                <img src="/static/donguk-img/util_icon_out.png" alt="로그아웃">
	                로그아웃
	            </a>
	        </li>
	    </ul>
		`
	}
}

let user = getPrincipal();
loadHeader(user);