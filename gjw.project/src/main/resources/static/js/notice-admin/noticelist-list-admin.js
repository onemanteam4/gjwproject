


const boardBtnSubmit = document.querySelector(".board-btn ul li button");
const text = document.querySelector(".notice-title");


boardBtnSubmit.onclick = () => {
let noticelist = {
	noticeTitle : text.value
};
	console.log(text.value);
	console.log(noticelist);
	addNoticeList(noticelist);
	console.log("돌아감");
}


function addNoticeList(noticelist) {
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
				location.replace("/admin/notice_list_admin");
				
				
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



