let prevBtn = document.querySelector(".pre-month");
let nextBtn = document.querySelector(".next-month");
let prevBtn2 = document.querySelector(".pre-month2");
let nextBtn2 = document.querySelector(".next-month2");
let calendar = document.querySelector(".calendar");
let calendarSec = document.querySelector(".calendar-sec");
let changeCal = document.querySelector(".month");
let changeCal2 = document.querySelector(".month2")
let calendarShowFir = document.querySelector(".calendar-show-fir")
let calendarShowSec = document.querySelector(".calendar-show-sec")

const listWrap = document.querySelector(".list-wrap");
const btnMonth = document.querySelectorAll("btn-month-wrap button");
const monthbtn = document.querySelector(".monthbtn");


let nowMonth = new Date(); // 현재 달을 페이지를 로드한 날로 초기화
let nowMonth2 = new Date();
let today = new Date(); // 페이지를 로드한 날짜를 저장
let yyyy = today.getFullYear();
let mm = today.getMonth();
let nn = today.getMonth() + 4;
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
let nextToday = yyyy + "-" + nn + "-" + dd;
calendarShowFir.value = newToday;
calendarShowSec.value = nextToday;

calendarShowFir.onclick = () => {
    calendar.style.display="block";
    calendarSec.style.display="none";
    
}

calendarShowSec.onclick = () => {
    calendarSec.style.display="block";
    calendar.style.display="none";
}

buildCalendar();
function buildCalendar() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);

    if(nowMonth.getMonth() < 9) {
        changeCal.innerText = (nowMonth.getMonth() + 1) + "월";
    } else{
        changeCal.innerText = (nowMonth.getMonth() + 1) + "월";
    }
    
    let tbody_calendar = document.querySelector(".calendar-tbody");

    while(tbody_calendar.rows.length > 0) { //이전에 출력된 행 삭제
        tbody_calendar.deleteRow(tbody_calendar.rows.length - 1)
    }

    let nowRow = tbody_calendar.insertRow(); // 첫번째 행추가

    for(let i = 0; i < firstDate.getDay(); i++) { // 이번 달 첫날의 요일만큼 열 추가
        let nowColum = nowRow.insertCell(); // 1일 앞은 빈칸이니깐
    }

    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) { // nowDay에 1일을 넣고 마지막날까지 증가시키며 반복

        let nowColum = nowRow.insertCell();
        nowColum.innerText = nowDay.getDate();

        if(nowDay.getDay() == 6) {
            nowRow = tbody_calendar.insertRow();
        }

        nowColum.style.cursor = "pointer";
        nowColum.onclick = () => {
            choiceDate(nowColum);
            let mm = null;
            let dd = null;
            if(nowDay.getMonth() < 10) {
                mm = "0" + (nowDay.getMonth());
            } else{
                mm = (nowDay.getMonth());
            }
            if(nowColum.textContent < 10) {
				dd = "0" + nowColum.textContent;
			} else {
				dd = nowColum.textContent;
			}
            let selectDate = nowDay.getFullYear() + "-" + mm + "-" + dd;
            calendarShowFir.value = selectDate;
            calendar.style.display="none"
        }    
        
    }

    if(nowMonth.getMonth() == (today.getMonth() - 6)) {
		prevBtn.style.display = 'none';
		nextBtn.style.display = 'block';
	} else if(nowMonth.getMonth() == (today.getMonth() + 3)) {
		nextBtn.style.display = 'none';
		prevBtn.style.display = 'block';
	} else {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
    }

}


buildCalendarSec();
function buildCalendarSec() {
    let firstDate = new Date(nowMonth2.getFullYear(), nowMonth2.getMonth(), 1);
    let lastDate = new Date(nowMonth2.getFullYear(), nowMonth2.getMonth() + 1, 0);
    changeCal2.innerText = (nowMonth2.getMonth() + 1) + "월";
    
    let tbody_calendarSec = document.querySelector(".calendar-sec-tbody");

    while(tbody_calendarSec.rows.length > 0) { //이전에 출력된 행 삭제
        tbody_calendarSec.deleteRow(tbody_calendarSec.rows.length - 1)
    }

    let nowRow = tbody_calendarSec.insertRow(); // 첫번째 행추가

    for(let i = 0; i < firstDate.getDay(); i++) { // 이번 달 첫날의 요일만큼 열 추가
        let nowColum = nowRow.insertCell(); // 1일 앞은 빈칸이니깐
    }

    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) { // nowDay에 1일을 넣고 마지막날까지 증가시키며 반복

        let nowColum = nowRow.insertCell();
        nowColum.innerText = nowDay.getDate();

        if(nowDay.getDay() == 6) {
            nowRow = tbody_calendarSec.insertRow();
        }

        nowColum.style.cursor = "pointer";

        nowColum.onclick = () => {
            choiceDate2(nowColum);
            let mm = null;
            let dd = null;
            if(nowDay.getMonth() < 10) {
                mm = "0" + (nowDay.getMonth());
            } else{
                mm = (nowDay.getMonth());
            }
            if(nowColum.textContent < 10) {
				dd = "0" + nowColum.textContent;
			} else {
				dd = nowColum.textContent;
			}
            let selectDate = nowDay.getFullYear() + "-" + mm + "-" + dd;
            calendarShowSec.value = selectDate;
            calendarSec.style.display="none"
        }
    }

    if(nowMonth2.getMonth() == (today.getMonth() - 6)) {
		prevBtn2.style.display = 'none';
		nextBtn2.style.display = 'block';
	} else if(nowMonth2.getMonth() == (today.getMonth() + 3)) {
		nextBtn2.style.display = 'none';
		prevBtn2.style.display = 'block';
	} else {
        nextBtn2.style.display = 'block';
        prevBtn2.style.display = 'block';
    }

}


function choiceDate(nowColumn) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
}

function choiceDate2(nowColumn) {
    if (document.getElementsByClassName("choiceDay2")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay2")[0].classList.remove("choiceDay2");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay2");           // 선택된 날짜에 "choiceDay" class 추가
}

function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
	buildCalendar();    // 달력 다시 생성
    let changeCal = document.querySelector(".month");
    if(nowMonth.getMonth() < 9) {
        changeCal.innerText = (nowMonth.getMonth() + 1) + "월";
    } else{
        changeCal.innerText = (nowMonth.getMonth() + 1) + "월";
    }
}

// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
    let changeCal = document.querySelector(".month");
    if(nowMonth.getMonth() < 9) {
        changeCal.innerText = (nowMonth.getMonth() + 1) + "월";
    } else{
        changeCal.innerText = (nowMonth.getMonth() + 1) + "월";
    }
}

function prevCalendar2() {
    nowMonth2 = new Date(nowMonth2.getFullYear(), nowMonth2.getMonth() - 1, nowMonth2.getDate());   // 현재 달을 1 감소
	buildCalendarSec();    // 달력 다시 생성
    let changeCal2 = document.querySelector(".month2");
    if(nowMonth2.getMonth() < 9) {
        changeCal2.innerText = (nowMonth2.getMonth() + 1) + "월";
    } else{
        changeCal2.innerText = (nowMonth2.getMonth() + 1) + "월";
    }
}

// 다음달 버튼 클릭
function nextCalendar2() {
    nowMonth2 = new Date(nowMonth2.getFullYear(), nowMonth2.getMonth() + 1, nowMonth2.getDate());   // 현재 달을 1 증가
    buildCalendarSec();    // 달력 다시 생성
    let changeCal2 = document.querySelector(".month2");
    if(nowMonth2.getMonth() < 9) {
        changeCal2.innerText = (nowMonth2.getMonth() + 1) + "월";
    } else{
        changeCal2.innerText = (nowMonth2.getMonth() + 1) + "월";
    }
}

//달력만들기 끝

//티켓 가져오기

let ticket = loadUserTicket();
function loadUserTicket() {
	console.log(newToday);
	console.log(nextToday);
	let ticket = null
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/mypage/checkTicket",
		data: {
			userCode: getUser().user_code,
			selectedDay: newToday,
			anotherDay: nextToday
		},
		dataType: "json",
		success: (response) => {
			ticket = response.data
			loadTicket(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	});
	return ticket;
}


function loadTicket(data) {

	if(data != null) {
		for(let i = 0; i < data.length; i++) {

			let ticketCount = data[i].cardNum + data[i].uniformBCount + data[i].uniformSCount + data[i].kbBCount + data[i].kbSCount + data[i].onlineBCount + data[i].onlineMCount + data[i].onlineSCount + data[i].afterBCount + data[i].afterSCount;
			console.log(ticketCount);
			listWrap.innerHTML += `
		        <div class="ticket-list">
		            <a href="/auth/mypage_ticket_info/${data[i].orderCode}">
		                <p class="buy-date">${data[i].buyDate}</p>
		                <div class="name">
		                    <p>예매번호 ${data[i].orderCode}</p>
		                    <strong>어뮤즈먼트 이용권 / ` + ticketCount + `매</strong>
		                </div>
		                <dl class="ticket-detail">

		                </dl>
		                <div class="price">
		                    <p>${data[i].totalPrice}원</p>
		                    <span class="ticket-status">미사용</span>
		                </div>
		            </a>
		        </div>
			`
		}

	}
}



ticketDeail(ticket);
function ticketDeail(ticket) {
	const ticketDetail = document.querySelectorAll(".ticket-detail");
	for(let i = 0; i < ticket.length; i++) {
		let ticketCount = ticket[i].cardNum + ticket[i].uniformBCount + ticket[i].uniformSCount + ticket[i].kbBCount + ticket[i].kbSCount + ticket[i].onlineBCount + ticket[i].onlineMCount + ticket[i].onlineSCount + ticket[i].afterBCount + ticket[i].afterSCount;
		if(ticket[i].cardNum != 0) {
			if(ticket[i].cardNum == 1) {
				ticketDetail[i].innerHTML = `
			        <dt>카드사 제휴할인</dt>
			        <dd>BC카드 1매 외 ` + (ticketCount - 1) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].cardNum == 2) {
				ticketDetail[i].innerHTML = `
			        <dt>카드사 제휴할인</dt>
			        <dd>NH카드 1매 외 ` + (ticketCount - 1) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].cardNum == 3) {
				ticketDetail[i].innerHTML = `
			        <dt>카드사 제휴할인</dt>
			        <dd>현대카드 1매 외 ` + (ticketCount - 1) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].cardNum == 4) {
				ticketDetail[i].innerHTML = `
			        <dt>카드사 제휴할인</dt>
			        <dd>삼성카드 1매 외 ` + (ticketCount - 1) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].cardNum == 5) {
				ticketDetail[i].innerHTML = `
			        <dt>카드사 제휴할인</dt>
			        <dd>롯데카드 1매 외 ` + (ticketCount - 1) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}
			continue;
		} else if(ticket[i].uniformBCount != 0 || ticket[i].uniformSCount != 0) {
			if(ticket[i].uniformBCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>감성교복패키지(특가)</dt>
			        <dd>대인 ` + ticket[i].uniformBCount + `매 외 ` + (ticketCount - ticket[i].uniformBCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].uniformSCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>감성교복패키지(특가)</dt>
			        <dd>청소년 ` + ticket[i].uniformSCount + `매 외 ` + (ticketCount - ticket[i].uniformSCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}
			continue;
		} else if(ticket[i].kbBCount != 0 || ticket[i].kbSCount != 0) {
			if(ticket[i].kbBCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>KBPAY 특가</dt>
			        <dd>대인 ` + ticket[i].kbBCount + `매 외 ` + (ticketCount - ticket[i].kbBCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}else if(ticket[i].kbSCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>KBPAY 특가</dt>
			        <dd>소인 ` + ticket[i].kbSCount + `매 외 ` + (ticketCount - ticket[i].kbSCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}
			continue;
		} else if(ticket[i].onlineBCount != 0 || ticket[i].onlineMCount != 0 || ticket[i].onlineSCount != 0) {
			if(ticket[i].onlineBCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>온라인 회원 할인</dt>
			        <dd>대인 ` + ticket[i].onlineBCount + `매 외 ` + (ticketCount - ticket[i].onlineBCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].onlineMCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>온라인 회원 할인</dt>
			        <dd>청소년 ` + ticket[i].onlineMCount + `매 외 ` + (ticketCount - ticket[i].onlineMCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			} else if(ticket[i].onlineSCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>온라인 회원 할인</dt>
			        <dd>소인 ` + ticket[i].onlineSCount + `매 외 ` + (ticketCount - ticket[i].onlineSCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}
			continue;
		}else if(ticket[i].afterBCount != 0 || ticket[i].afterSCount != 0) {
			if(ticket[i].afterBCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>야간 할인권(4시)</dt>
			        <dd>대인/청소년 ` + ticket[i].afterBCount + `매 외 ` + (ticketCount - ticket[i].afterBCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}else if(ticket[i].afterSCount != 0) {
				ticketDetail[i].innerHTML = `
			        <dt>야간 할인권(4시)</dt>
			        <dd>소인 ` + ticket[i].afterSCount + `매 외 ` + (ticketCount - ticket[i].afterSCount) + `매</dd>
			        <dt>이용기간</dt>
			        <dd>${ticket[i].buyDate}~${ticket[i].buyDate}</dd>
				`
			}
			continue;
		}
	}

}

//1,3,6개월 선택시 변경 시작

function changeDate1() {
	let changeDay = new Date();
	let changeY = changeDay.getFullYear();
	let changeM = changeDay.getMonth();
	let changeD = changeDay.getDate();
	if(changeM < 10) {
		changeM = ("0" + changeM);
	}
	if(changeD < 10) {
		changeD = ("0" + changeD);
	}
	calendarShowFir.value = changeY + "-" + changeM + "-" + changeD;
}

function changeDate2() {
	let changeDay = new Date();
	let changeY = changeDay.getFullYear();
	let changeM = changeDay.getMonth() - 2;
	let changeD = changeDay.getDate();
	if(changeM < 10) {
		changeM = ("0" + changeM);
	}
	if(changeD < 10) {
		changeD = ("0" + changeD);
	}
	calendarShowFir.value = changeY + "-" + changeM + "-" + changeD;
}

function changeDate3() {
	let changeDay = new Date();
	let changeY = changeDay.getFullYear();
	let changeM = changeDay.getMonth()-5;
	let changeD = changeDay.getDate();
	if(changeM < 10) {
		changeM = ("0" + changeM);
	}
	if(changeD < 10) {
		changeD = ("0" + changeD);
	}
	calendarShowFir.value = changeY + "-" + changeM + "-" + changeD;
}

//1,3,6개월 선택시 변경 끝

monthbtn.onclick = () => {
	newToday = calendarShowFir.value;
	nextToday = calendarShowSec.value;
	listWrap.innerHTML = ""
	ticket = loadUserTicket();
	ticketDeail(ticket);
}

















