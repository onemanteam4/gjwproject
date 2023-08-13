const operationTimeCalendar = document.querySelector(".operation-time-calendar");
const viewCalendar = document.querySelector(".view-calendar");


//캘린더 버튼 클릭시 나오게
viewCalendar.onclick = () => {
    if(operationTimeCalendar.style.display == 'none') {
        operationTimeCalendar.style.display = 'block';
    }else {
        operationTimeCalendar.style.display = 'none';
    }
}


//달력
let nowMonth = new Date();
let today = new Date();
let nowYearMonth = new Date();

window.onload = function() {Calendar();}

function Calendar() {
	
	
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    //시작 전체
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
    //마지막 전체

    let calendarMonthStartDay = firstDate.getDay();
    //시작 일
    let calendarMonthLastDate = lastDate.getDate();
    //마지막 일

	
	
	
    let tbodyCalendar = document.querySelector(".cols2 > table > tbody");
	
    let calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);


    let nowRow = tbodyCalendar.insertRow();

	let dayYear = nowYearMonth.getFullYear();
	let dayMonth = nowYearMonth.getMonth() + 1;
	//10월 보다 작다면 앞에 0이 붙게
	if(dayMonth < 9) {
		dayMonth = "0" + dayMonth;
	}
    
	const YearMonth = document.querySelector(".cols2 span.month");
	const viewYearMonth = document.querySelector(".time-wrapwidth span.month");
	YearMonth.innerText = dayYear+"."+dayMonth;
		
	viewYearMonth.innerHTML = dayYear+"."+dayMonth;
	
    for(let i = 0; i < calendarMonthStartDay; i++) {
        let nowColum = nowRow.insertCell();
    }

    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {
        let nowColum = nowRow.insertCell();
        nowColum.innerHTML += `
            <span>${nowDay.getDate()}</span>
        `;


		//일요일이 0부터 시작이기에 6이 된다면 한 줄 더 생기게
        if(nowDay.getDay() == 6) {
            nowRow = tbodyCalendar.insertRow();
        }

        nowColum.style.cursor = "pointer";

        
    }
    const Cols2 = document.querySelectorAll(".cols2 table tbody tr td span");
    const Cols = document.querySelector(".cols2 table tbody tr td");
    
    //클릭시 클래스 이름이 바꿔서 CSS적용
    for(let i = 0; i < 31; i ++) {
       
        
        Cols2[i].onclick = () => {
            for(let j = 0; j < 31; j ++) {
                Cols2[j].classList.remove("on");
            }



            Cols2[i].classList.add("on");
        }
    }
    
}


