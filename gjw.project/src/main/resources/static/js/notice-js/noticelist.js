let page = 1;
let totalPage = 0;
let newPage = 0;
const listPage = document.querySelectorAll(".list-page ul li#num");
const boardList = document.querySelector(".board-list tbody");
const boardCount = document.querySelector(".board-count ul");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const num = document.querySelector(".num");
//page수와 맞게 아래 버튼 만들기
function listlist(ppp) {
for(let i = 0; i < ppp.length; i++) {
	ppp[i].onclick = () => {
		page = 1;
		page = page + i;

		boardList.innerHTML = ``;

		load();
	}
}
}	//버튼 왼쪽 클릭 시 이전 페이지 가져오기
	buttonLeft.onclick = () => {
	page = page -1;	
	
	if(page > 0) {
		
	boardList.innerHTML = ``;
	load();

	}
	if(page < 1) {
		page = 1;
	}
	return;
}
//리스트 가져오기
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
//리스트 정보 page에 맞게 10개씩 가져오기
load();
function load() {
	$.ajax({
		type: "get",
		url: "/api/v1/noticelist/noticelist/notice",
		data: {
			"page": page,
			contentCount: 10
		},
		dataType: "json",
		async:false,
		success: (response) => {
			getList(response.data);
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
//가져온 데이터 innerHTML로 넣기
function getList(data) {
	let r = 1;
	
	setTotalCount(data[0].totalCount);
	let number = [];
	for(let content of data) {
		let year = content.createDate;
		let year2 = year.substring(0, 10);
		
		r--;
		//게시글 번호 noticeCode가 아닌 게시글 순서에 맞게 넣기
		let codeCode = content.totalCount + r;
		if(page > 1) {
			codeCode = content.totalCount + r -((page-1)*10);
		}
		
		const listContent = `
						<tr>
                            <td> ${codeCode}</td>
                            <td class="subject">
                                <a href="/notice/notice_list_details">${content.noticeTitle}</a>
                            </td>
                            <td>${content.noticeFile}</td>
                            <td>${content.noticeCount}</td>
                            <td>${year2}</td>
                        </tr>
		`
		boardList.innerHTML += listContent;
		//배열에 noticeCode넣기
		number.push(content.noticeCode);

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
		return;
	}        
                
	}
	
	const boardListSelect = document.querySelectorAll(".board-list tbody tr td a");
	
	for(let p = 0; p < 10; p++) {
		boardListSelect[p].onclick = () => {
			
		addCount(number[p]);
		}
	}
	

}

function addCount(i) {
		$.ajax({
			type: "put",
			url: "/api/v1/noticelist/noticelist/count",
			data: {noticeCode: i
			},
			
			dataType: "json",
			success: (response) => {
				
				if(response.data) {
				boardList.innerHTML = '';
				load();
			}
				},
			error:
			errorMessage
		})
}


