

let Code = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
load();
function load() {
	$.ajax({
		type: "get",
		url: `/api/v1/auth/get/clientdetails/${Code}`,
		
		dataType: "json",
		
		success: (response) => {
			getList(response.data);
		},
		error:
			errorMessage
	})
}

function getList(data) {
	const clientList = document.querySelector(".client-list");
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
	location.replace("/admin/admin_client");
}












