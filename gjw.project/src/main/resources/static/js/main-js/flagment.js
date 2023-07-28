function getPrincipal() {
	let user = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/principal",
		dataType: "json",
		success: (response) => {
			user = response.data;
		},
		error: (error) => {
			console.log(error);
		}
	});
	return user;
}

function loadHeader(user) {
	const header = document.querySelector(".main-top-list");
	
	if(user == null) {
		header.innerHTML = `
		        <ul>
                    <li>
                        <a href="/index">홈</a>
                    </li>
                    <li>
                        <a href="/auth/signin">로그인</a>
                    </li>
                    <li>
                        <a href="/auth/signup_first">회원가입</a>
                    </li>
                    <li class="reservation">
                        <a href="단체예약 사이트 주소" style="color: #f26c4f;">단체예약</a>
                    </li>
                    <li class="reservation">
                        <a href="연간이용권 사이트 주소" style="color: #f26c4f;">연간이용권</a>
                    </li>
                    <li class="choice">
                        <a href="">
                            <img src="/static/main-image/main-logo/google.png" style="height: 19px; width: 19;">
                            언어 선택
                            <img src="/static/main-image/main-logo/languge.png">
                        </a>
                    </li>
            	</ul>
        `
	} else {
		header.innerHTML = `
		        <ul>
                    <li>
                        <a href="/index">홈</a>
                    </li>
                    <li>
                        <a href="/auth/signin">로그아웃</a>
                    </li>
                    <li>
                        <a href="/auth/signup_first">마이페이지</a>
                    </li>
                    <li class="reservation">
                        <a href="단체예약 사이트 주소" style="color: #f26c4f;">단체예약</a>
                    </li>
                    <li class="reservation">
                        <a href="연간이용권 사이트 주소" style="color: #f26c4f;">연간이용권</a>
                    </li>
                    <li class="choice">
                        <a href="">
                            <img src="/static/main-image/main-logo/google.png" style="height: 19px; width: 19;">
                            언어 선택
                            <img src="/static/main-image/main-logo/languge.png">
                        </a>
                    </li>
            	</ul>
		        
        `
	}
}

let user = getPrincipal();
loadHeader(user);

function getUser() {
	return user;
}