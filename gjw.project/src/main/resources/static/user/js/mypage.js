const pageTitle = document.querySelector(".page-title");
const checkLinksList = document.querySelector(".check-links-list");

getUser();
loadName();
/* 마이페이지 타이틀 */
function loadName() {
	getUser();
	pageTitle.innerHTML = `
	<div class="my-info-wrap">
        <h2>마이페이지</h2>
        <a href="/auth/mypage_modify" class="my-info">개인정보수정</a>
    </div>
    <p>` + getUser().user_name + `님, 경주월드를 방문해주셔서 감사해요!</p>
	`;
}

/* 현재 날짜 이후 티켓 가져오기 */
let today = new Date();
let yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let nn = today.getMonth() + 3;
let dd = today.getDate();
if(mm < 10) {
	mm = ("0" + mm);
}
if(nn < 10) {
	nn = ("0" + nn);
}
if(dd < 10) {
	dd = ("0" + dd);
}
let newToday = yyyy + "-" + mm + "-" + dd;
let nextDay = yyyy + "-" + nn + "-" + dd;

checkUserTicket();
function checkUserTicket() {
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/mypage/checkTicket",
		data: {
			userCode: getUser().user_code,
			selectedDay: newToday,
			anotherDay: nextDay
		},
		dataType: "json",
		success: (response) => {
			loadTicket(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}

/* 티켓 유무 확인 */
function loadTicket(data) {
	if(data.length == 0) {
		checkLinksList.innerHTML = `
			<img src="/static/donguk-img/mypage_links_ticket.png" alt="티켓 예매 조회">
            <b>티켓 예매 조회</b>
            <p>사용가능한 티켓이 없습니다</p>
            <a href="/auth/mypage_list" class="btn-tklist">확인하기</a>
		`
	} else if(data != null) {
		checkLinksList.innerHTML = `
			<img src="/static/donguk-img/mypage_links_ticket.png" alt="티켓 예매 조회">
	        <b>티켓 예매 조회</b>
	        <p>사용가능한 티켓이 <span>${data.length}건</span>이 있어요</p>
	        <a href="/auth/mypage_list" class="btn-tklist-on">확인하기</a>
		`
	} 
	
}

const btnTklist = document.querySelector(".btn-tklist-on");
btnTklist.style.opacity = "1";