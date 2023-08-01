const myId = document.querySelector("#myId");
const myName = document.querySelector("#myName");
const myPw = document.querySelector("#myPw");

const btnLeave = document.querySelector(".btn-leave");



getUser();
console.log(getUser());
loadUserInfo();
function loadUserInfo() {
	myId.value = getUser().user_id;
	myName.value = getUser().user_name;
}

let userPass = getPrincipalPassword();
function getPrincipalPassword() {
	let userP = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/principal/password",
		dataType: "json",
		success: (response) => {
			userP = response.data;
		},
		error: (error) => {
			console.log(error);
		}
	});
	return userP;
}

console.log(userPass);


btnLeave.onclick = () => {
	userCode = getUser().user_code;
	
	let leaveData = {
		userCode: getUser().user_code,
		userId: getUser().user_id,
		userPassword: myPw.value
	}
	
	$.ajax({
		async: false,
		type: "delete",
		url: `/auth/mypage/leave/${userCode}`,
		contentType: "application/json",
		data: JSON.stringify(leaveData),
		dataType: "json",
		success: (response) => {
			console.log(response.data);
			if(response.data) {
				alert("회원탈퇴 완료");
				location.replace("/logout");
			}else if(!response.data) {
				alert("비밀번호가 일치하지않습니다.");
			}
		},
		error: (error) => {
		   console.log("회원정보가 일치하지 않습니다.");
		   console.log(error);
		}
	})
	
}