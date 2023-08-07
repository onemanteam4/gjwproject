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

let Code = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
load();
function load() {
	$.ajax({
		type: "get",
		url: `/api/v1/auth/get/clientdetails/${Code}`,
		
		dataType: "json",
		
		success: (response) => {
			getList(response.data);
			console.log(response.data);
		},
		error:
			errorMessage
	})
}

function getList(data) {
	const clientList = document.querySelector(".client-list");
	console.log(data);
	for(let content of data) {
		
	const listContent = `
			<dt style="height: 50px;">구분</dt>
            <dd class="full" id="select-div">
            	${content.clientDivision}
            </dd>
            <dt style="height: 50px;">서비스 유형</dt>
            <dd class="full" id="option-select">
				${content.clientService}
			</dd>
            <dt style="height: 50px;">이름</dt>
            <dd>
				${content.clientName}
			</dd>
            <dt style="height: 50px;">방문일</dt>
            <dd>
               ${content.visitDay}
            </dd>
            <dt style="height: 50px;">이메일</dt>
            <dd>
				${content.clientEmail}
			</dd>
            <dt style="height: 50px;">연락처</dt>
            <dd>
				${content.clientPhone}
			</dd>
            <dt style="height: 50px;">성별</dt>
            <dd class="full">
            	${content.clientGender}
			</dd>
            <dt style="height: 50px;">연령</dt>
            <dd class="full" id="age-type">
            	${content.clientAge}
            </dd>
            <dt style="height: 50px;">회신방법</dt>
            <dd class="full" id="call-type">
            	${content.callBack}
			</dd>
            <dt style="height: 50px;">제목</dt>
            <dd class="full-subject">
				${content.clientTitle}
			</dd>
            <dt style="height: 255px;">내용</dt>
            <dd class="full-content">
				${content.clientContent}
			</dd>
            <dt style="height: 50px;" class="file-details">파일첨부</dt>
            <dd class="full-content-file">
				${content.clientFile}
			</dd>
            <dt style="height: 50px;" class="file-details-second">(이미지만 가능)</dt>
            <dd class="full-content-file-details"></dd>
		
	`
	clientList.innerHTML = listContent;
	}
}

function errorMessage(request, status, error) {
    alert("요청실패");
    console.log(request.status);
    console.log(request.responseText);
    console.log(error);
}

const boardButton = document.querySelector(".board-button ul li input");

boardButton.onclick = () => {
	location.replace("/auth/admin_client");
}












