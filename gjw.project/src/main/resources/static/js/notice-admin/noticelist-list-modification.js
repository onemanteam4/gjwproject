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


const boardBtnSubmit = document.querySelector(".board-btn ul li button");
const text = document.querySelector(".notice-title");
let Code = location.pathname.substring(location.pathname.lastIndexOf("/")+1);

console.log(Code);
console.log(text.value);
boardBtnSubmit.onclick = () => {
let noticelist = {
	noticeCode : Code,
	noticeTitle : text.value
};
console.log(text.value);
		$.ajax ({
		type: "put",
		url: `/api/v1/noticelist/noticelist/update/${Code}`,
		data: JSON.stringify(noticelist),
		contentType:"application/json",
		async: false,
		dataType: "json",
		success : (response) => {
			if(response.data) {
				/*boardListTable.removeChild(todoContent);*/
				console.log(response.data);
				location.replace("/admin/notice_list_admin");
			}
		},
		error: errorMessage
	})
}

function errorMessage(request, status, error) {
    alert("요청실패");
    console.log(request.status);
    console.log(request.responseText);
    console.log(error);
}






/*function noticeUpdate(noticelist, noticeCode) {
	$.ajax ({
		type: "put",
		url: `/api/v1/noticelist/noticelist/update/${noticeCode}`,
		data: {
			noticeCode: noticelist.ListCode,
			noticeTitle : noticelist
		},
		async: false,
		dataType: "json",
		success : (response) => {
			if(response.data) {
				boardListTable.removeChild(todoContent);
				console.log(response.data);
				location.replace("/auth-notice/notice_list_admin");
			}
		},
		error: errorMessage
	})
}*/







/*function noticeUpdate() {
	$.ajax ({
		type: "put",
		url: "/api/v1/noticelist/noticelist/update",
		async: false,
		dataType: "json",
		success : (response) => {
			
		}
	})
}*/



/*function addNoticeList(noticelist) {
	$.ajax ({
		type: "post",
		url: "/api/v1/noticelist/addlist",
		contentType: "application/json",
		data: JSON.stringify(noticelist),
		async: false,
		dataType: "json",
		success: (response) => {
			if(response.data) {
				alert("작성성공");
				location.replace("/auth-notice/notice_list_admin");
				
				
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
}*/


