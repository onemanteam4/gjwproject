let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let inner = document.querySelector(".inner b");


window.onload = function() {buildCalendar();}

let nowMonth = new Date(); // 현재 달을 페이지를 로드한 날로 초기화
let today = new Date(); // 페이지를 로드한 날짜를 저장
let yaer = null;
let month = null;
today.setHours(0,0,0,0);

function buildCalendar() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
    
	if(nowMonth.getMonth() < 9) {
        inner.innerText = nowMonth.getFullYear() + ". 0" + (nowMonth.getMonth() + 1);
    } else{
        inner.innerText = nowMonth.getFullYear() + "." + (nowMonth.getMonth() + 1);
    }     
    
    let tbody_calenar = document.querySelector(".calendar > tbody");

    while(tbody_calenar.rows.length > 0) { //이전에 출력된 행 삭제
        tbody_calenar.deleteRow(tbody_calenar.rows.length - 1)
    }

    let nowRow = tbody_calenar.insertRow(); // 첫번째 행추가

    for(let i = 0; i < firstDate.getDay(); i++) { // 이번 달 첫날의 요일만큼 열 추가
        let nowColum = nowRow.insertCell(); // 1일 앞은 빈칸이니깐
    }

    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) { // nowDay에 1일을 넣고 마지막날까지 증가시키며 반복

        let nowColum = nowRow.insertCell();
        nowColum.innerText = nowDay.getDate();
        

        if(nowDay.getDay() == 0) {
            nowColum.style.color = "#f85549";
        }

        if(nowDay.getDay() == 6) {
            nowColum.style.color = "#2498e5";
            nowRow = tbody_calenar.insertRow();
        }

        if(nowDay < today) {
            nowColum.className = "pastDay";
        } else if(nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
            nowColum.className = "today";
            nowColum.style.cursor = "pointer";
            nowColum.onclick = function () {choiceDate(nowColum);}
            
        } else {
			if(nowDay.getMonth() > today.getMonth() && nowDay.getDate() > today.getDate()) {
				nowColum.className = "unable";
				nowColum.style.opacity = "0.15";
			}else {
		        nowColum.className = "futureDay";
		        nowColum.style.cursor = "pointer";
		        nowColum.onclick = function () {choiceDate(nowColum);}
			}
        }

    }
    
    if(nowMonth.getMonth() == today.getMonth()) {
		prevBtn.style.display = 'none';
		nextBtn.style.display = 'block';
	} else if(nowMonth.getMonth() == (today.getMonth()+1)) {
		nextBtn.style.display = 'none';
		prevBtn.style.display = 'block';
	}
	
	year = nowMonth.getFullYear();
	localStorage.setItem("dateYear", year);
	month = nowMonth.getMonth()+1;
	if(month < 10) {
		month = ("0" + month);
	}
	localStorage.setItem("dateMonth", month);	
}

function choiceDate(nowColumn) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
    
    const choiceDay = document.querySelector(".choiceDay");
    let day = choiceDay.textContent;
    localStorage.setItem("dateDay", day);
}

function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
	buildCalendar();    // 달력 다시 생성
    let changeCal = document.querySelector(".inner b");
    if(nowMonth.getMonth() < 9) {
        changeCal.innerText = nowMonth.getFullYear() + ". 0" + (nowMonth.getMonth() + 1);
    } else{
        changeCal.innerText = nowMonth.getFullYear() + "." + (nowMonth.getMonth() + 1);
    }
}

// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
    let changeCal = document.querySelector(".inner b");
    if(nowMonth.getMonth() < 9) {
        changeCal.innerText = nowMonth.getFullYear() + ". 0" + (nowMonth.getMonth() + 1);
    } else{
        changeCal.innerText = nowMonth.getFullYear() + "." + (nowMonth.getMonth() + 1);
    }
}
/*
let date = null;
localStorage.setItem("날짜", date);

const btnType = document.querySelector(".btn-type");

btnType.onclick = () => {

}
*/











