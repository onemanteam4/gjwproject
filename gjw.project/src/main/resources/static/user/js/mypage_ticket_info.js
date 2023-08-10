

let orderCode = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);


let order = orderInfo();
function orderInfo() {
	let order = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/mypage/ticketInfo/" + orderCode,
		dataType: "json",
		success: (response) => {
			order = response.data;
			fillPage(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	});
	return order;
}

function fillPage(data) {
	const pageTitle = document.querySelector(".page-title");
	const ticketPreview = document.querySelector(".ticket-preview");
	const infoView = document.querySelectorAll(".info-view");
	
	
	
	pageTitle.innerHTML = `
		<h2>예매조회</h2>
	    <p>
	        <span>${data.buyDate}</span>
	        에 예약하신 내역이예요.
	    </p>
	`;
	
	ticketPreview.innerHTML = `
	    <dl class="ticket-estimate">
	        <dt>예매번호</dt>
	        <dd>${data.orderCode}</dd>
	        <dt>이용기간</dt>
	        <dd>${data.buyDate} ~ ${data.buyDate}</dd>
	        <dt class="clear">선택 권종</dt>
	        <dd class="option-detail">
	            <div class="list">

	            </div>
	            <div class="btn-wrap">
	                <button class="btn-cancel">취소하기</button>
	                <button class="btn-varcode">바코드 보기</button>
	            </div>
	        </dd>
	    </dl>
	`;
	
	infoView[0].innerHTML = `
	    <h4>방문자 정보</h4>
	    <dl>
	        <dt>이름</dt>
	        <dd>` + getUser().user_name + `</dd>
	        <dt>휴대폰 번호</dt>
	        <dd>` + getUser().user_phone + `</dd>
	        <dt>이메일</dt>
	        <dd>` + getUser().user_email + `</dd>
	    </dl>
	`;
	
	infoView[1].innerHTML = `
	    <h4>결제 정보</h4>
	    <dl>
	        <dt>${data.buyDate}</dt>
	        <dd>${data.totalPrice}원</dd>
	        <dd class="part-option">
	            <dl>
	                <dt>결제 수단 : 카카오페이</dt>
	                <dd>카카오 머니</dd>
	                <dt></dt>
	                <dd>결제 상태 : 승인</dd>
	            </dl>
	        </dd>
	        <div class="total">
	            <dl>
	                <dt>
	                    <strong>총 결제 잔액</strong>
	                </dt>
	                <dd>
	                    <strong>${data.totalPrice}원</strong>
	                </dd>
	            </dl>
	        </div>
	    </dl>
	`
}

orderDetail(order);
function orderDetail(order) {
	const list = document.querySelector(".list");
	
	let ticketCount = order.cardNum + order.uniformBCount + order.uniformSCount + order.kbBCount + order.kbSCount + order.onlineBCount + order.onlineMCount + order.onlineSCount + order.afterBCount + order.afterSCount;
	if(order.cardNum != 0) {
		if(order.cardNum == 1) {
			list.innerHTML = `
	            <strong>카드사 제휴할인</strong>
	            <p>BC카드 1매 외 ` + (ticketCount - 1) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.cardNum == 2) {
			list.innerHTML = `
	            <strong>카드사 제휴할인</strong>
	            <p>NH카드 1매 외 ` + (ticketCount - 1) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.cardNum == 3) {
			list.innerHTML = `
	            <strong>카드사 제휴할인</strong>
	            <p>현대카드 1매 외 ` + (ticketCount - 1) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.cardNum == 4) {
			list.innerHTML = `
	            <strong>카드사 제휴할인</strong>
	            <p>삼성카드 1매 외 ` + (ticketCount - 1) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.cardNum == 5) {
			list.innerHTML = `
	            <strong>카드사 제휴할인</strong>
	            <p>롯데카드 1매 외 ` + (ticketCount - 1) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}
		return;
	} else if(order.uniformBCount != 0 || order.uniformSCount != 0) {
		if(order.uniformBCount != 0) {
			list.innerHTML = `
	            <strong>감성교복 패키지(특가)</strong>
	            <p>대인 ` + order.uniformBCount + `매 외 ` + (ticketCount - order.uniformBCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.uniformSCount != 0) {
			list.innerHTML = `
	            <strong>감성교복 패키지(특가)</strong>
	            <p>청소년 ` + order.uniformSCount + `매 외 ` + (ticketCount - order.uniformSCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}
		return;
	} else if(order.kbBCount != 0 || order.kbSCount != 0) {
		if(order.kbBCount != 0) {
			list.innerHTML = `
	            <strong>KBPAY 특가</strong>
	            <p>대인 ` + order.kbBCount + `매 외 ` + (ticketCount - order.kbBCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}else if(order.kbSCount != 0) {
			list.innerHTML = `
	            <strong>KBPAY 특가</strong>
	            <p>소인 ` + order.kbSCount + `매 외 ` + (ticketCount - order.kbSCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}
		return;
	} else if(order.onlineBCount != 0 || order.onlineMCount != 0 || order.onlineSCount != 0) {
		if(order.onlineBCount != 0) {
			list.innerHTML = `
	            <strong>온라인 회원 할인</strong>
	            <p>대인 ` + order.onlineBCount + `매 외 ` + (ticketCount - order.onlineBCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.onlineMCount != 0) {
			list.innerHTML = `
	            <strong>온라인 회원 할인</strong>
	            <p>청소년 ` + order.onlineMCount + `매 외 ` + (ticketCount - order.onlineMCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		} else if(order.onlineSCount != 0) {
			list.innerHTML = `
	            <strong>온라인 회원 할인</strong>
	            <p>소인 ` + order.onlineSCount + `매 외 ` + (ticketCount - order.onlineSCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}
		return;
	}else if(order.afterBCount != 0 || order.afterSCount != 0) {
		if(order.afterBCount != 0) {
			list.innerHTML = `
	            <strong>오후 할인권(3시)</strong>
	            <p>대인 ` + order.afterBCount + `매 외 ` + (ticketCount - order.afterBCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}else if(order.afterSCount != 0) {
			list.innerHTML = `
	            <strong>오후 할인권(3시)</strong>
	            <p>소인 ` + order.afterSCount + `매 외 ` + (ticketCount - order.afterSCount) + `매</p>
	            <p>` + order.totalPrice + `원</p>
	            <span class="status">미사용</span>
			`
		}
		return;
	}
	
}









