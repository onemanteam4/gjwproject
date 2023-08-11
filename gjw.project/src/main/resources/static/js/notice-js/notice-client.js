


//달력
let nowMonth = new Date();
let today = new Date();

window.onload = function() {Calendar();}

function Calendar() {
    const Cols2 = document.querySelectorAll(".ul-datepicker-calendar tbody tr td span");
    const daydate = document.querySelector(".ul-datepicker-calendar tbody tr td span");
    const Cols = document.querySelector(".ul-datepicker-calendar tbody tr td");
    const Sdate = document.querySelector(".hasDatepicker parsley-error");
    const Edate = document.querySelector("#edate");
    const DatePicker = document.querySelectorAll(".Date-Picker");
    const uiDatepickerCurrent = document.querySelector(".ui-datepicker-current");
    const ulDatepickerClose = document.querySelector(".ul-datepicker-close");
    const ulDatepickerMonth = document.querySelector(".ul-datepicker-month");
    let year1 = today.getFullYear();
    let month1 = today.getMonth() + 1;
    let day1 = today.getDate();
    let startDayValue1 = year1 + "-" + month1 + "-" + day1;


    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    //시작 전체
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);
    //마지막 전체
    
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let startDayValue = year + "-" + month + "-" + day;
	
	
	

    let calendarMonthStartDay = firstDate.getDay();
    //시작 일
    let calendarMonthLastDate = lastDate.getDate();
    //마지막 일
	let ulDatepickerYear1 = document.querySelector(".ul-datepicker-year");
    ulDatepickerYear1.innerText = nowMonth.getFullYear();
    let ulDatepickerMonth1 = document.querySelector(".ul-datepicker-month");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    if(nowMonth.getMonth() < 9) {
        ulDatepickerMonth1.innerText = "0" + (nowMonth.getMonth() + 1) + "월" + "(" + months[nowMonth.getMonth()] + ")"; 
    } else{
        ulDatepickerMonth1.innerText =  + (nowMonth.getMonth() + 1) + "월" + "(" + months[nowMonth.getMonth()] + ")";
    }


    let tbodyCalendar = document.querySelector(".ul-datepicker-calendar > tbody");

    let calendarWeekCount = Math.ceil((calendarMonthStartDay + calendarMonthLastDate) / 7);


    let nowRow = tbodyCalendar.insertRow();

    for(let i = 0; i < calendarMonthStartDay; i++) {
        let nowColum = nowRow.insertCell();
    }

    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {
        let nowColum = nowRow.insertCell();

        let nowYear = nowDay.getFullYear();
        let nowMonth = nowDay.getMonth() + 1;
        let nowDate = nowDay.getDate();
        let starDate = nowYear + "-" + nowMonth + "-" + nowDate;
        
        
        
        
        
        nowColum.innerHTML += `
            <span id="span">${nowDay.getDate()}</span>
        `;
        
        nowColum.innerHTML += `
            <span id="colum" style = "display: none;">${nowDay.getFullYear()}-${nowDay.getMonth() + 1}-${nowDay.getDate()}
            </span>
        `;
        

    



        

        if(nowDay.getDay() == 6) {
            nowRow = tbodyCalendar.insertRow();
        }

        nowColum.style.cursor = "pointer";

       

    }

    for(let i = 0; i < lastDate.getDate(); i ++) {
        const Cols2 = document.querySelectorAll(".ul-datepicker-calendar tbody tr td span#span");
        const colum = document.querySelectorAll("#colum");


        Cols2[i].onclick = () => {
            for(let j = 0; j < lastDate.getDate(); j ++) {
                Cols2[j].classList.remove("on");
            }


            frmVisitDate.value = colum[i].innerText;
            Cols2[i].classList.add("on");
        }
    }
const frmVisitDate = document.querySelector("#frm-visit-date");
frmVisitDate.onclick = () => {
    const ulDatepickerDiv = document.querySelector(".ul-datepicker-div");
    ulDatepickerDiv.style.display = 'block';
    close();
    

    for(let i = 0; i < lastDate.getDate(); i ++) {
        const Cols2 = document.querySelectorAll(".ul-datepicker-calendar tbody tr td span#span");
        const colum = document.querySelectorAll("#colum");


        Cols2[i].onclick = () => {
            for(let j = 0; j < lastDate.getDate(); j ++) {
                Cols2[j].classList.remove("on");
            }


            frmVisitDate.value = colum[i].innerText;
            Cols2[i].classList.add("on");
            ulDatepickerDiv.style.display = 'none';
        }
    }
}    



function close () {
    const ulDatepickerDiv = document.querySelector(".ul-datepicker-div");
    ulDatepickerClose.onclick = () => {
        ulDatepickerDiv.style.display = 'none';
   }
}



    for(let i = 0; i < 31; i ++) {
       const ulDatepickerDiv = document.querySelector(".ul-datepicker-div");
        
       
        uiDatepickerCurrent.onclick = () => {
            frmVisitDate.value = startDayValue;
            
            ulDatepickerDiv.style.display = 'none';
        }

    }

//     for(let i = 0; i < DatePicker.length; i++) {
//         const ulDatepickerDiv = document.querySelector(".ul-datepicker-div");
//         DatePicker[i].onclick = () => {
            
        
//             ulDatepickerDiv.style.display = 'block';
//         }
//         ulDatepickerClose.onclick = () => {
//             ulDatepickerDiv.style.display = 'none';
//         }
//     }
// }


//전년도 달

const ulDatepickerPrev = document.querySelector(".ul-datepicker-prev");
const ulDatepickerNext = document.querySelector(".ul-datepicker-next");

ulDatepickerPrev.onclick = () => {
    prevCalendar();
}

ulDatepickerNext.onclick = () => {
    nextCalendaar();
}


function prevCalendar() {
    let ulDatepickerCalendar = document.querySelector(".ul-datepicker-calendar tbody");
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());
    ulDatepickerCalendar.innerHTML = "";
    Calendar();

    let ulDatepickerYear = document.querySelector(".ul-datepicker-year");
    ulDatepickerYear.innerText = nowMonth.getFullYear();
    let ulDatepickerMonth = document.querySelector(".ul-datepicker-month");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    if(nowMonth.getMonth() < 9) {
        ulDatepickerMonth.innerText = "0" + (nowMonth.getMonth() + 1) + "월" + "(" + months[nowMonth.getMonth()] + ")"; 
    } else{
        ulDatepickerMonth.innerText =  + (nowMonth.getMonth() + 1) + "월" + "(" + months[nowMonth.getMonth()] + ")";
    }
}


function nextCalendaar() {
    let ulDatepickerCalendar = document.querySelector(".ul-datepicker-calendar tbody");
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());
    ulDatepickerCalendar.innerHTML = "";
    Calendar();

    let ulDatepickerYear = document.querySelector(".ul-datepicker-year");
    ulDatepickerYear.innerText = nowMonth.getFullYear();
    let ulDatepickerMonth = document.querySelector(".ul-datepicker-month");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    if(nowMonth.getMonth() < 9) {
        ulDatepickerMonth.innerText = "0" + (nowMonth.getMonth() + 1) + "월" + "(" + months[nowMonth.getMonth()] + ")"; 
    } else{
        ulDatepickerMonth.innerText =  + (nowMonth.getMonth() + 1) + "월" + "(" + months[nowMonth.getMonth()] + ")";
    }
}
}

























const up = document.querySelector(".up");
const clientListInput = document.querySelectorAll(".client-list dd input");
const agree = document.querySelector("#agree");



var Value = "놀이기구";
function func() {
	var selectOption = document.getElementById("select-option");
	
	var selectedValue = selectOption.options[selectOption.selectedIndex].value;
	
	Value = selectedValue;
	

	
}

	var check = false;
agree.onclick = () => {
	const checkbox = document.getElementById("agree");
	
	const is_checked = checkbox.checked;
	
	check = is_checked;
	
	
	
}




up.onclick = () => {
	console.log(check);
	
	console.log(Value);
	console.log(clientListInput[0].value);
	console.log(clientListInput[1].value);
	console.log(clientListInput[2].value);
	console.log(clientListInput[3].value);
	console.log(clientListInput[4].value);
	console.log(clientListInput[5].value);
	console.log(clientListInput[6].value);
	console.log(clientListInput[7].value);
	console.log(clientListInput[8].value);
	console.log(clientListInput[9].value);
	console.log(clientListInput[10].value);
	console.log(clientListInput[24].value);
	console.log(clientListInput[25].value);
	console.log(callBack.value);
	console.log(age.value);
	console.log(division.value);
	console.log(agree.value);
	

const frmContent = document.querySelector("#frm-content");	

	
	
	let clientData = {
		clientDivision : division.value,
		clientService : Value,
		clientName : clientListInput[5].value,
		visitDay : clientListInput[6].value,
		clientEmail : clientListInput[7].value,
		clientPhone : clientListInput[8].value,
		clientGender : gendername.value,
		clientAge : age.value,
		callBack : callBack.value,
		clientTitle : clientListInput[24].value,
		clientContent : frmContent.value,
		clientFile : clientListInput[25].value,
		
		checkagreeFlag : check
		
	}
	
		$.ajax({
		async: false,
		type: "post",
		url: "/api/v1/client/clientup",
		contentType: "application/json",
		data: JSON.stringify(clientData),
		dataType: "json",
		success: (response) => {
			if(response.data) {
				alert("문의성공");
				
			}
		},
		error: (error) => {
			if(error.status == 400) {
				   alert(JSON.stringify(error.responseJSON.data))
			   }else {
				   console.log("요청실패");
				   console.log(error);
			   }
		}
	})
}

const genderType = document.querySelectorAll("#gender-type input");
const gendername = document.querySelector(".gendername");
gendername.value = "남";
getGender();

function getGender() {
	genderType[1].onclick = () => {
		genderType[1].checked = true;
		gendername.value = "남";
	}
	genderType[2].onclick = () => {
		genderType[2].checked = true;
		gendername.value = "여";
	}
}

const selectDivInput = document.querySelectorAll("#select-div input");
const division = document.querySelector(".division");
division.value = "칭찬사항";
getDiv();
function getDiv() {
	selectDivInput[1].onclick = () => {
		selectDivInput[1].checked = true;
		division.value = "칭찬사항";
	}
	selectDivInput[2].onclick = () => {
		selectDivInput[2].checked = true;
		division.value = "불편사항";
	}
	selectDivInput[3].onclick = () => {
		selectDivInput[3].checked = true;
		division.value = "문의사항";
	}
}

const ageType = document.querySelectorAll("#age-type input");
const age = document.querySelector(".age");
age.value = "10대";
getAge();


function getAge() {
	for(let i = 1; i < ageType.length; i++ ) {
		ageType[i].onclick = () => {
		ageType[i].checked = true;
		age.value = (i*10)+"대";
	}
	}
}


const callType = document.querySelectorAll("#call-type input");
const callBack = document.querySelector(".call-back");
callBack.value = "이메일";
getCall();
function getCall() {
	callType[1].onclick = () => {
		callType[1].checked = true;
		callBack.value = "이메일";
	}
	
	callType[2].onclick = () => {
		callType[2].checked = true;
		callBack.value = "전화";
	}
	
	callType[3].onclick = () => {
		callType[3].checked = true;
		callBack.value = "거부";
	}
}




















