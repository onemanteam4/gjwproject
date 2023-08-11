


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



