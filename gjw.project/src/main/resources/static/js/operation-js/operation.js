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

const listHover = document.querySelector(".list-hover");
const hover = document.querySelectorAll(".hover");
const mainTopMenu = document.querySelector(".main-top-menu");

//탑 메뉴 오버시 나오게
mainTopMenu.onmouseover = () => {
    for(let i = 0; i < hover.length; i++) {
        if(hover[i].style.display == 'none') {
            hover[i].style.display = 'block';
            hover[i].style.opacity = '1';
    
            mainTopMenu.style.height = '374px';
        }else {
            hover[i].style.display = 'none';
            hover[i].style.opacity = '0';
        }
    }
}

mainTopMenu.onmouseout = () => {
    for(let i = 0; i < hover.length; i++) {
        if(hover[i].style.display == 'block') {
            hover[i].style.display = 'none';
            hover[i].style.opacity = '0';
    
            mainTopMenu.style.height = '56px';
        }else {
            hover[i].style.display = 'block';
            hover[i].style.opacity = '1';
        }
    }
}

//오른쪽 이미지 오버시 나오게
const quickController = document.querySelector("#quickController");

quickController.onmouseover = () => {
    quickController.style.right = '-75px';
}

quickController.onmouseout = () => {
    quickController.style.right = '-145px';
}



//맨 위 배너 슬라이드
const boxSlider = document.querySelector(".box-slider-list");
const boxSliderList = document.querySelectorAll(".box-slider-list li");
let imgCount = 0;
let slideCount = boxSliderList.length;


banner();

let slideWidth = -1903;

function banner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    setInterval( () => {
        

        boxSlider.style.transition = 'transform 1s ease-out';
        boxSlider.style.transform = 'translate3d(-' + 1903*(index+1) + 'px, 0px, 0px)';
        index ++;
        
        console.log(index);
        if( index >= 4) {
            index = -1;
        }
    }, 10000);
       

}


//달력
let nowMonth = new Date();
let today = new Date();
let nowYearMonth = new Date();

window.onload = function() {Calendar();}
/*window.onload = function() {nowMonthYear();}*/

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

    console.log(calendarWeekCount);

    let nowRow = tbodyCalendar.insertRow();

	let dayYear = nowYearMonth.getFullYear();
	let dayMonth = nowYearMonth.getMonth() + 1;

	if(dayMonth < 9) {
		dayMonth = "0" + dayMonth;
	}
    
	const YearMonth = document.querySelector(".cols2 span.month");
	const viewYearMonth = document.querySelector(".time-wrapwidth span.month");
	YearMonth.innerText = dayYear+"."+dayMonth;
		
	viewYearMonth.innerHTML = dayYear+"."+dayMonth;
	
    for(let i = 0; i < calendarMonthStartDay; i++) {
        let nowColum = nowRow.insertCell();
        console.log("실행은 됨.");
    }

    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {
        let nowColum = nowRow.insertCell();
        nowColum.innerHTML += `
            <span>${nowDay.getDate()}</span>
        `;



        if(nowDay.getDay() == 6) {
            nowRow = tbodyCalendar.insertRow();
        }

        nowColum.style.cursor = "pointer";

        
    }
    const Cols2 = document.querySelectorAll(".cols2 table tbody tr td span");
    const Cols = document.querySelector(".cols2 table tbody tr td");
    for(let i = 0; i < 31; i ++) {
       
        
        Cols2[i].onclick = () => {
            for(let j = 0; j < 30; j ++) {
                Cols2[j].classList.remove("on");
            }



            Cols2[i].classList.add("on");
        }
    }
    
}

/*function nowMonthYear () {
	
	let dayYear = nowYearMonth.getFullYear();
	let dayMonth = nowYearMonth.getMonth() + 1;

    
	const YearMonth = document.querySelector(".cols2");
	
	YearMonth.innerHTML = `
		<span class="month">${dayYear}.0${dayMonth}</span>
	`
}*/
