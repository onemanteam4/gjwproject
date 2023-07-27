
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


// let nowMonth = new Date();
// let today = new Date();
// let m = 0;
// let week = 0;


// window.onload = function() {Calendar(week);}

// function Calendar(week) {
//     const right = document.querySelector(".right");
//     const rightUl = document.querySelector(".right ul");
//     const rightUlLi = document.querySelector(".right ul li");
//     let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
//     let today2 = new Date();
    
//     console.log(firstDate);


//     let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
//     let CalendarMonthLastDate = lastDate.getDate();
//     let year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();
//     let prevMonthLastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 0);
//     let TodayDay = nowMonth.getDay();
    
//     let startDayValue = year + "-" + month + "-" + day;


    

//     let arWeek = [0, 0, 0, 0, 0, 0, 0];

    
//     var weekDay = (day + (week*7));
    
//    console.log("음.." + weekDay);

//     for(let i = TodayDay; i < 7; i++) {
//         if(weekDay <= 0) {
//             weekDay = firstDate.getDate();
//         }
       

//         arWeek[i] = weekDay++;
        

//         if(weekDay > CalendarMonthLastDate) {
//             weekDay = 1;
//         }
        
//     }
//     weekDay = (day + (week*7));
    
//     for(let j = TodayDay - 1; j >= 0; j--) {
//         weekDay--;
        
//         if(weekDay <= 0) {
//             weekDay = prevMonthLastDate.getDate();
//         }

//         arWeek[j] = weekDay;
//     }

//     console.log("이거" + arWeek);

//     for(let i = 0; i < 7; i ++) {
//         rightUl.innerHTML += `
//                 <li>
//                     <span>${arWeek[i]}</span>
//                 </li>
                
//         `
        
//     }


// const rightPrevBtn = document.querySelector(".right button span.prev");    
// rightPrevBtn.onclick = () => {
//     rightUl.innerHTML = ``;
    
    
//         m = m-1;
//         Calendar(m);
//         console.log("먹힌다!");
    
//         console.log(weekDay);
    

//     console.log(arWeek);
    
// }

   
// let nextMonthStartDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
//     let weekYear = year;
//     let weekMonth = month;
//     weekDay = day;
//     console.log("요거" + nextMonthStartDate);
//     arWeek = ["","","","","","",""];


// for (let y = TodayDay; y < 7; y++) {
//     arWeek[y] = weekYear + "-" + weekMonth + "-" + weekDay;
//     weekDay++;

//     if(weekDay > CalendarMonthLastDate) {
//         weekYear = nextMonthStartDate.getFullYear();
//         weekMonth = nextMonthStartDate.getMonth() + 1;
//         weekDay = 1;
//     }
// }

// weekDay = day;

// for (let z = TodayDay - 1; z >= 0; z--) {
//     weekDay--;

//     if(weekDay == 0) {
//         weekYear = prevMonthLastDate.getFullYear();
//         weekMonth = prevMonthLastDate.getMonth() + 1;
//         weekDay = prevMonthLastDate;
//     }
//     arWeek[z] = weekYear + "-" + weekMonth + "-" + weekDay;
// }

// console.log("이거" + arWeek);

// };
const rightUl = document.querySelector(".right ul");
var day = new Date();
day.setDate(day.getDate()-day.getDay());

console.log(day);
set_day();

function week_calandar(week) {
    day.setDate(day.getDate()+week*7);

    var title = day.getFullYear() + "/" + (day.getMonth()+1);
    var date = "";
    for(var i = 0; i < 7; i++) {
        date += day.getDate() + "|";
        console.log(date);
        if(day.getDate() == 1) {
            title += "~" + day.getFullYear() + "/" + (day.getMonth()+1);
            day.setDate(day.getDate()+1);
        }
    }
        day.setDate(day.getDate()-7);
        for(let i = 0; i < 7; i ++) {
                   rightUl.innerHTML += `
                            <li>
                              <span>${date}</span>
                            </li>
                            
                 `
                    
           }
    
}

function set_day() {
    day = new Date();
    day.setDate(day.getDate()-day.getDay());

    week_calandar(0);
}

const rightPrevBtn = document.querySelector(".right button span.prev");    
rightPrevBtn.onclick = () => {
   rightUl.innerHTML = ``;

   week_calandar(-1)
};
