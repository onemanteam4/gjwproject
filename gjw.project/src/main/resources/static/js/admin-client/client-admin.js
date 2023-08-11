


let page = 1;
let totalPage = 0;
let newPage = 0;
const listPage = document.querySelectorAll(".list-page ul li#num");
const boardList = document.querySelector(".board-list tbody");

const boardCount = document.querySelector(".board-count ul");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const num = document.querySelector(".num");



function listlist(ppp) {
for(let i = 0; i < ppp.length; i++) {
	ppp[i].onclick = () => {
		page = 1;
		page = page + i;
		
		
		
		boardList.innerHTML = ``;
				
		
		load();
		for(let y = 0; y < listPage.length; y++) {
                  listPage[y].classList.remove("on");
                }
                if(listPage[i].className == "num") {
                   listPage[i].classList.add("on");
                }
			
	}
	
}
}
	buttonLeft.onclick = () => {
	page = page -1;	
	
	if(page > 0) {
		
	boardList.innerHTML = ``;
	load();
	
			for(let x = 0; x < listPage.length; x++) {
	          listPage[x].classList.remove("on");
	        }
	        if(listPage[page-1].className == "num") {
	           listPage[page-1].classList.add("on");
	        }
	
	
	}
	if(page < 1) {
		page = 1;
		

		
	}
	return;
}

function addListBtn(page) {
	
	let nowCount = parseInt(page / 10) + 1;
	const ListPager = document.querySelector(".list-page-details");
      ListPager.innerHTML = ``;

	for(let i = 1; i <= nowCount; i++) {
		const Btn = `
        <li id="num" class="num">
            <button type="button">${i}</button>
        </li>
        
        `
        ListPager.innerHTML += Btn;
        }
        const ppp = document.querySelectorAll(".list-page-details li#num");
		
		listlist(ppp);

		
}




	








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
			addListBtn(response.data[0].totalCount);
		},
		error:
			errorMessage
	})
}



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
		
		r--;
		let codeCode = content.totalCount + r;
		if(page > 1) {
			codeCode = content.totalCount + r -((page-1)*10);
		}
		
		
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

		
		
		
		
		
		let nowCount = parseInt(content.totalCount / 10) + 1;
		
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
		
		if(page <= nowCount) {
		
		boardList.innerHTML = ``;
		load();
		
		}
		if(page > nowCount) {
		page = nowCount;
		}
		for(let x = 0; x < listPage.length; x++) {
	          listPage[x].classList.remove("on");
	        }
	        if(listPage[page-1].className == "num") {
	           listPage[page-1].classList.add("on");
	        }
		
		
		
		
		return;
		
	}        
                
	}
	
	const boardListSelect = document.querySelectorAll(".board-list tbody tr td a");

	const deleteAll = document.querySelectorAll(".delete");
	for(let m = 0; m < deleteAll.length; m++) {
		deleteAll[m].onclick = () => {
			deletelist(number[m]);
		}
	}
	const subject = document.querySelectorAll(".subject a");
	for(let n = 0; n < subject.length; n++) {
		subject[n].onclick = () => {
			
			/*noticeUpdate(number[n]);*/
			location.href = "/admin/auth_client_check/"+ number[n];
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
				boardList.innerHTML = '';
				load();
			}
		},
		error: errorMessage
	})
}







