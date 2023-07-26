const operationTimeCalendar = document.querySelector(".operation-time-calendar");
const viewCalendar = document.querySelector(".view-calendar");




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

    let time = setInterval( () => {
        

        boxSlider.style.transition = 'transform 1s ease-out';
        boxSlider.style.transform = 'translate3d(-' + 1903*(index+1) + 'px, 0px, 0px)';
        index ++;
        
        console.log(index);
        if( index >= 5) {
            index = -1;
            setTimeout(() => {
                boxSlider.style.transition = 'transform 0s ease-out';
                boxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            }, 1010)
        }
    }, 10000);
    boxSlider.onmouseover = () => {
        clearInterval(time);
        console.log("멈춰!");
    }

    boxSlider.onmouseout = () => {

        index = 0;
        time = setInterval( () => {
            console.log("재시작!");

            boxSlider.style.transition = 'transform 1s ease-out';
            boxSlider.style.transform = 'translate3d(-'+ 1903*(index+1) + 'px, 0px, 0px)';
            index ++;
            
            console.log(index+1);
            if( index >= 5) {
                index = -1;
    
                setTimeout(() => {
                    boxSlider.style.transition = 'transform 0s ease-out';
                    boxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
                }, 501)
            }
        }, 10000);
    }
       

}


//달력
let nowMonth = new Date();
let today = new Date();

window.onload = function() {Calendar();}

function Calendar() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    //시작 전체
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
    //마지막 전체
    
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let startDayValue = year + "-" + month + "-" + day;

    console.log(startDayValue);


    let calendarMonthStartDay = firstDate.getDay();
    //시작 일
    let calendarMonthLastDate = lastDate.getDate();
    //마지막 일

    console.log(firstDate);
    console.log(lastDate);
    console.log(calendarMonthStartDay);

    let tbodyCalendar = document.querySelector(".ul-datepicker-calendar > tbody");

    let calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);

    console.log(calendarWeekCount);

    let nowRow = tbodyCalendar.insertRow();

    for(let i = 0; i < calendarMonthStartDay; i++) {
        let nowColum = nowRow.insertCell();
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
    const Cols2 = document.querySelectorAll(".ul-datepicker-calendar tbody tr td span");
    const daydate = document.querySelector(".ul-datepicker-calendar tbody tr td span");
    const Cols = document.querySelector(".ul-datepicker-calendar tbody tr td");
    const Sdate = document.querySelector("#sdate");
    const DatePicker = document.querySelectorAll(".Date-Picker");
    const uiDatepickerCurrent = document.querySelector(".ui-datepicker-current");
    const ulDatepickerClose = document.querySelector(".ul-datepicker-close");
    let year1 = today.getFullYear();
    let month1 = today.getMonth() + 1;
    let day1 = today.getDate();
    let startDayValue1 = year + "-" + month + "-" + day;


    for(let i = 0; i < 31; i ++) {
       
        
        Cols2[i].onclick = () => {
            for(let j = 0; j < 31; j ++) {
                Cols2[j].classList.remove("on");
            }


            
            Cols2[i].classList.add("on");
            
            
            
        }
        uiDatepickerCurrent.onclick = () => {
            Sdate.value = startDayValue;
            console.log(startDayValue);
        }

    }

    for(let i = 0; i < DatePicker.length; i++) {
        const ulDatepickerDiv = document.querySelector(".ul-datepicker-div");
        DatePicker[i].onclick = () => {
            
        
            ulDatepickerDiv.style.display = 'block';
        }
        ulDatepickerClose.onclick = () => {
            ulDatepickerDiv.style.display = 'none';
        }
    }
}





function please(nowColum) {
    let clickedYear = today.getFullYear();
    let clickedMonth = today.getMonth() + 1;
    let clickedDate = this.getAttribute('on');

    clickedDate = clickedDate > 10 ? clickedDate : '0' + clickedDate;
    clickedMonth = clickedMonth > 10 ? clickedMonth : '0' + clickedMonth;
    clickedYMD = clickedYear + "-" + clickedMonth + "-" + clickedDate;

    Sdate.value = clickedYMD;
    self.close();
    console.log(clickedYMD);
}

function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear, nowMonth.getMonth() - 1, nowMonth.getDate());
    Calendar();

    let ulDatepickerPrev = document.querySelector(".ul-datepicker-prev");
    if(nowMonth.getMonth() < 9) {
        
    }
}


