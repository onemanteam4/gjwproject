
const rightUl = document.querySelector(".right ul");
var day = new Date();
let today = new Date();
let nowMonth = new Date();
let now = new Date();
let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
let prevMonthLastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() , 1);
let year = today.getFullYear();
let month = today.getMonth() + 1;
let days = today.getDate();
let prevMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() , 0);
let prevMonth1 = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 0);
let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
let nowDate2 = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
let nowDate3 = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 1);
let i = 0;
today = new Date(year, month, days);

let comeGetdate = now.getDate(); 
day.setDate(day.getDate()-(day.getDay()));


let today2 = new Date(prevMonth.setMonth(nowMonth.getMonth()-1));

set_day();

function week_calandar(week) {
    
    day.setDate(day.getDate()-(day.getDay()-1));
    
    today.setDate(today.getDate()-(today.getDay()-1));




    day.setDate(day.getDate()+week*7);
    today.setDate(today.getDate()+week*7);
    lastDate = new Date(day.getFullYear(), day.getMonth() + 1, 0);
    nowDate2 = new Date(day.getFullYear(), day.getMonth() + 1, 1);
    nowDate3 = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    
    const Left = document.querySelector(".left");
    if(nowDate2.getMonth() < 9) {

        Left.innerText = nowDate2.getFullYear() + "."+ "0" + nowDate2.getMonth();
    } else {
        Left.innerText = nowDate2.getFullYear() + "." +nowDate2.getMonth();
    }
 

    // if(day.getDate() <= 7) {
    //     prevMonth1.setMonth(now.getMonth())-1;
    //     console.log("ㅇㅇ"+prevMonth1);
    // }

    let TodayDay = nowMonth.getDay();
    var title = day.getFullYear() + "/" + (day.getMonth()+1);
    var date = "";
    for(var i = 0; i < 7; i++) {
        date = day.getDate() + i;
    if(date > lastDate.getDate()) {
        
       
        
        break;
    }
        if(comeGetdate == date) {
		rightUl.innerHTML += `
                <li class="date on">
                  <span>${date}</span>
                </li>
                            
                 `
		}else {
		
        rightUl.innerHTML += `
                            <li class="date">
                              <span>${date}</span>
                            </li>
                            
                 `
       } 
        
    }
    if(date > lastDate.getDate()) {
        for(let j = 0; j < 7-i; j++) {

            date = nowDate2.getDate() + j;
            rightUl.innerHTML += `
            <li class="date">
              <span>${date}</span>
            </li>
            
    `
        }
        
        
    }
    
//     if(date > prevMonth.getDate()) {
    
//     console.log("이건 제발.." + prevMonth.getMonth());
    
//     for(let j = 0; j < prevMonth.getDay(); j ++) {
//         date = prevMonthLastDate.getDate() + j
//         console.log("si" + prevMonth.getDay());
//         console.log("하" + date);

//         rightUl.innerHTML += `
//                             <li>
//                               <span>${date}</span>
//                             </li>
                            
//                  `
//     }
    
// }
    select();
}

function set_day() {
    day = new Date();
    day.setDate(day.getDate()-3);

    week_calandar(0);
}

const rightPrevBtn = document.querySelector(".right button span.prev");    
rightPrevBtn.onclick = () => {
   rightUl.innerHTML = ``;

   week_calandar(-1)
};


function prevCalendar() {
    prevMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    
    
}

const rightNextBtn = document.querySelector(".right button span.next");
rightNextBtn.onclick = () => {
    rightUl.innerHTML = ``;

   week_calandar(+1)
};
function select () {

    const selectDayDetails = document.querySelectorAll(".select-day-details ul li");
        for(let x = 0; x < selectDayDetails.length; x++) {
            selectDayDetails[x].onclick = () => {
                for(let y = 0; y < selectDayDetails.length; y++) {
                    selectDayDetails[y].classList.remove("on");
                }
                if(selectDayDetails[x].className == "date") {
                    selectDayDetails[x].classList.add("on");
                }
            }
        }
}



// now_day();


// day.setDate(day.getDate()-(day.getDay()-1));
// function now_day(week) {
//     console.log(day);

//     day.setDate(day.getDate()+week*7);
//     console.log("d"+ day);

//     var date = "";
//     for(var i = 0; i < 7; i++) {
//         console.log(day.getDate());
//         date = day.getDate() + i;
//         console.log("뭐지" + date);
//     if(date > prevMonth.getDate()) {
        
       
        
//         break;
//     }
        
//         rightUl.innerHTML += `
//                             <li>
//                               <span>${date}</span>
//                             </li>
                            
//                  `
        
        
//     }
// }