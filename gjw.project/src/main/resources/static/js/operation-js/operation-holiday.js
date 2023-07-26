
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


let nowMonth = new Date();
let today = new Date();

window.onload = function() {Calendar();}

function Calendar() {
    const right = document.querySelector(".right");
    const rightUl = document.querySelector(".right ul");
    const rightUlLi = document.querySelector(".right ul li");
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);

    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let startDayValue = year + "-" + month + "-" + day;

    let calendarMonthStartDay = firstDate.getDay();
    //시작 일
    let calendarMonthLastDate = lastDate.getDate();
    //마지막 일

    console.log(calendarMonthStartDay);

    

    let calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);
    console.log(calendarWeekCount);


for(let i = 0; i < 1; i ++) {
    right.innerHTML += `
        <ul>
            <li>
                <span>${today.getDate()}</span>
            </li>
            <li>
                <span>${today.getDate()}</span>
            </li>
            <li>
                <span>${today.getDate()}</span>
            </li>
            <li>
                <span>${today.getDate()}</span>
            </li>
            <li class="on">
                <span>${today.getDate()}</span>
            </li>
            <li>
                <span>${today.getDate()}</span>
            </li>
            <li>
                <span>${today.getDate()}</span>
            </li>
        </ul>
    `
    
}












};

