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

const up = document.querySelector(".up");
const clientListInput = document.querySelectorAll(".client-list dd input");
const agree = document.querySelector("#agree");


up.onclick = () => {
	console.log(clientListInput.length);
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
	console.log(callBack.value);
	console.log(age.value);
	console.log(division.value);
	console.log(agree.value);
	

const frmContent = document.querySelector("#frm-content");	

	
	console.log(target.value);
	let clientData = {
		clientDivision : division.value,
		clientService : target.value,
		clientName : clientListInput[4].value,
		visitDay : clientListInput[5].value,
		clientEmail : clientListInput[6].value,
		clientPhone : clientListInput[7].value,
		clientGender : gendername.value,
		clientAge : age.value,
		callBack : callBack.value,
		clientTitle : clientListInput[23].value,
		clientContent : frmContent.value,
		clientFile : clientListInput[24].value,
		checkagreeFlag : agree.value
		
	}
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













