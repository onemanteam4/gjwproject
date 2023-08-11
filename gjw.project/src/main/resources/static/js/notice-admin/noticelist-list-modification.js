const boardBtnSubmit = document.querySelector(".board-btn ul li button");
const text = document.querySelector(".notice-title");
let Code = location.pathname.substring(location.pathname.lastIndexOf("/")+1);

boardBtnSubmit.onclick = () => {
let noticelist = {
	noticeCode : Code,
	noticeTitle : text.value
};
		$.ajax ({
		type: "put",
		url: `/api/v1/noticelist/noticelist/update/${Code}`,
		data: JSON.stringify(noticelist),
		contentType:"application/json",
		async: false,
		dataType: "json",
		success : (response) => {
			if(response.data) {
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