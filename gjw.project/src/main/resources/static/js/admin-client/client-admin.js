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



let page = 1;
let totalPage = 0;
let newPage = 0;
const listPage = document.querySelectorAll(".list-page ul li#num");
const boardList = document.querySelector(".board-list tbody");

const boardCount = document.querySelector(".board-count ul");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const num = document.querySelector(".num");




for(let i = 0; i < listPage.length; i++) {
	listPage[i].onclick = () => {
		page = 1;
		console.log(i + "된다!");
		page = page + i;
		
		
		
		console.log("page값" + page);
		boardList.innerHTML = ``;
				
		
		load();
		for(let y = 0; y < listPage.length; y++) {
                  listPage[y].classList.remove("on");
                  console.log("제거");
                }
                if(listPage[i].className == "num") {
                   listPage[i].classList.add("on");
                   console.log("추가");
                }
			
	}
	
}

	buttonLeft.onclick = () => {
	page = page -1;	
	console.log("돌아감" + page);
	
	if(page > 0) {
		
	boardList.innerHTML = ``;
	load();
	
			for(let x = 0; x < listPage.length; x++) {
	          listPage[x].classList.remove("on");
	          console.log("제거");
	        }
	        if(listPage[page-1].className == "num") {
	           listPage[page-1].classList.add("on");
	           console.log("page" + page);
	        }
	
	
	}
	if(page < 1) {
		page = 1;
		console.log("왜안됌?" + page);
		

		
	}
	return;
}






	


/*	listPage[0].onclick = () => {
		let page = 1;
		console.log(i + "된다!");
		let newPage = (page + i);
		if(newPage < totalPage) {
			boardList.innerHTML = ``;
			load();
		}
		console.log("page값" + newPage);
		boardList.innerHTML = ``;
		load();
	}



	listPage[1].onclick = () => {
		let page = 2;
		
		let newPage = page ;
		if(newPage < totalPage) {
			boardList.innerHTML = ``;
			load();
		}
		
		boardList.innerHTML = ``;
		load1();
	}



	listPage[2].onclick = () => {
		let page = 3;
		
		let newPage = page;
		if(newPage < totalPage) {
			boardList.innerHTML = ``;
			load();
		}
		
		boardList.innerHTML = ``;
		load2();
	}*/






load();
function load() {
	$.ajax({
		type: "get",
		url: "/api/v1/auth/get/client",
		data: {
			"page": page,
			contentCount: 10
		},
		dataType: "json",
		
		success: (response) => {
			getList(response.data);
			console.log("오는디");
		},
		error:
			errorMessage
	})
}

/*function load1() {
	$.ajax({
		type: "get",
		url: "/api/v1/noticelist/noticelist/notice",
		data: {
			page:2,
			contentCount: 10
		},
		dataType: "json",
		
		success: (response) => {
			getList(response.data);
		},
		error:
			errorMessage
	})
}

function load2() {
	$.ajax({
		type: "get",
		url: "/api/v1/noticelist/noticelist/notice",
		data: {
			page:3,
			contentCount: 10
		},
		dataType: "json",
		
		success: (response) => {
			getList(response.data);
		},
		error:
			errorMessage
	})
}*/

function errorMessage(request, status, error) {
    alert("요청실패");
    console.log(request.status);
    console.log(request.responseText);
    console.log(error);
}


function setTotalCount(totalCount) {
	totalPage = totalCount % 10 == 0 ? totalCount / 10 : Math.floor(totalCount / 10) + 1;
}


function getList(data) {
	let r = 1;
	
	setTotalCount(data[0].totalCount);
	let number = [];
	for(let content of data) {
		let year = content.createDate;
		let year2 = year.substring(0, 10);
		console.log(year2);
		
		r--;
		let codeCode = content.totalCount + r;
		if(page > 1) {
			codeCode = content.totalCount + r -((page-1)*10);
		}
		
		console.log(content);
		console.log(r);
		console.log(codeCode);
		
		const listContent = `
						<tr>
                            <td> ${codeCode}</td>
                            <td class="subject">
                                <a>${content.clientTitle}</a>
                            </td>
                            <td>
                            	${content.clientDivision}
                            </td>
                            <td>
								<button type="button" class="delete">
                            		<span class="material-symbols-outlined">
										delete
									</span>
                            	</button>
							</td>
                            <td>${year2}</td>
                        </tr>
		`
		boardList.innerHTML += listContent;
		
		

		number.push(content.clientCode);

		console.log(number);
		
		
		
		
		
		let nowCount = parseInt(content.totalCount / 10) + 1;
		console.log("현재값 : " + parseInt(nowCount));
		
		boardCount.innerHTML = `
				<li>
                    전체게시물 :
                    <span>${content.totalCount}</span>
                    건
                </li>
                <li>현재페이지 : 1 / ${nowCount}</li>
                `
                
	buttonRight.onclick = () => {
		page = page +1;
		console.log("돈다" + page);
		
		if(page <= nowCount) {
		
		boardList.innerHTML = ``;
		load();
		
		}
		if(page > nowCount) {
		page = nowCount;
		console.log("왜안됌?" + page);
		}
		for(let x = 0; x < listPage.length; x++) {
	          listPage[x].classList.remove("on");
	          console.log("제거");
	        }
	        if(listPage[page-1].className == "num") {
	           listPage[page-1].classList.add("on");
	           console.log("page" + page);
	        }
		
		
		
		
		return;
		
	}        
                
	}
	console.log("없냐..?"+number[0]);
	
	const boardListSelect = document.querySelectorAll(".board-list tbody tr td a");
	console.log(boardListSelect);	

	const deleteAll = document.querySelectorAll(".delete");
	for(let m = 0; m < deleteAll.length; m++) {
		deleteAll[m].onclick = () => {
			deletelist(number[m]);
			console.log(number[m]);
		}
	}
	const subject = document.querySelectorAll(".subject a");
	for(let n = 0; n < subject.length; n++) {
		subject[n].onclick = () => {
			
			/*noticeUpdate(number[n]);*/
			location.href = "/auth/auth_client_check/"+ number[n];
			console.log(number[n]);
		}
	}
	

}



const boardListTable = document.querySelector(".board-list table");

function deletelist(i) {
	$.ajax({
		type: "delete",
		url: "/api/v1/auth/client/delete",
		async: false,
		data: {clientCode: i},
		dataType: "json",
		success: (response) => {
			if(response.data) {
				/*boardListTable.removeChild(todoContent);*/
				console.log(response.data);
				boardList.innerHTML = '';
				load();
			}
		},
		error: errorMessage
	})
}

/*const text = document.querySelector(".notice-title");

let noticelist = {
	noticeTitle : text.value
};

function noticeUpdate(i) {
	$.ajax ({
		type: "put",
		url: "/api/v1/noticelist/noticelist/update",
		data: {
			noticeCode: i,
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
}
*/





