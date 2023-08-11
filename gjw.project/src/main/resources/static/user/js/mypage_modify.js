const signupName = document.querySelector("#signup-name");
const genderCheck = document.querySelector(".radio-type input");
const maleCheck = document.querySelector("#male");
const femaleCheck = document.querySelector("#female");
const signupId = document.querySelector("#signup-id");
const signupEmail = document.querySelector("#signup-email");
const signupHp = document.querySelector("#signup-hp");
const signupBirth = document.querySelector("#signup-birth");

const addsigungu = document.querySelector("#addsigungu");
const addsidoop = document.querySelectorAll("#addsido");
const addsigunguop = document.querySelectorAll("#addsigungu");

const agreeCheckInput = document.querySelector(".agree-check-input");
const inputData = document.querySelectorAll(".input_wrap input");

const genderType = document.querySelectorAll(".radio-type input");
const gendername = document.querySelector(".gendername");

let RegionCheckFlag = false;

getUser();
loadUserInfo();
/* 회원 정보 가져오기 */
function loadUserInfo() {
	signupName.value = getUser().user_name;
	signupId.value = getUser().user_id;
	
	signupEmail.value = getUser().user_email;
	signupHp.value = getUser().user_phone;
	signupBirth.value = getUser().user_birth;
	
	if(getUser().user_gender == "남자") {
		maleCheck.checked = true;
		gendername.value = "남자";
		
	} else if(getUser().user_gender == "여자"){
		femaleCheck.checked = true;
		gendername.value = "여자";
	}
	
}

const btnModify = document.querySelector(".btn-modify-modify");
btnModify.onclick = () => {
	
	agreeCheck();
	checkPassword();
	userCode = getUser().user_code;
	let modifyData = {
		userCode: getUser().user_code,
		userPassword: signupPw.value,
		userEmail: inputData[8].value,
		userGender: gendername.value,
		regionCode: regionCode,
		checkagreeFlag: agreeCheckInput.value,
		passwordCheckFlag: passwordBool.value
	}
	$.ajax({
		async: false,
		type: "put",
		url: `/auth/mypage/modify/${userCode}`,
		contentType: "application/json",
		data: JSON.stringify(modifyData),
		dataType: "json",
		success: (response) => {
			if(response.data) {
				alert("회원정보 수정완료");
				location.replace("/auth/mypage");
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

/* 지역 선택 시작 */
let siCode = 1;
let regionCode = 1;
regionLoad();
function regionLoad() {
	$.ajax({
		async: false,
		type: "get",
		url: `/auth/signup/${siCode}`,
		dataType: "json",
		success: (response) => {
			getRegion(response.data);
		},
		error : (error) => {
			console.log("요청실패");
			console.log(error);
		}
	})
}

function getRegion(data) {
	
	for(let i = 0; i < data.length; i++) {
		let suboption = document.createElement("option");
		suboption.text = data[i].regionGuName;
		suboption.value = data[i].regionCode;

		addsigungu.options.add(suboption);
	}
}

for(let i = 0; i < addsidoop.length; i++) {
	addsidoop[i].onclick = () => {
		siCode = addsidoop[i].value;
		addsigungu.options.length = 0;
		regionLoad();
	}
}

addsigungu.onclick = () => {
	regionCode = addsigungu.value;
}
/* 지역 선택 끝 */

/* 약관동의 시작 */
const checkrows = document.querySelectorAll(".chkbox");
const chk1 = document.querySelector("#chk1")
agreeCheck();
function agreeCheck() {
	if(checkrows[0].checked == true && checkrows[1].checked == true) {
		agreeCheckInput.value = true;
	} else {
		agreeCheckInput.value = false;
	}
}
/* 약관동의 끝 */

/* 성별확인 시작 */
getGender();
function getGender() {
	genderType[0].onclick = () => {
		genderType[0].checked = true;
		gendername.value = "남자";
	}
	genderType[1].onclick = () => {
		genderType[1].checked = true;
		gendername.value = "여자";
	}
	
}
/*성별확인 끝 */

/*비밀번호 중복 확인*/
const signupPw = document.querySelector("#signup-pw");
const chkSignupPw = document.querySelector("#chk-signup-pw");
const passwordBool = document.querySelector(".password-bool");

function checkPassword() {
	let pas1 = signupPw.value;
	let pas2 = chkSignupPw.value;
	if(pas1 != pas2) {
		passwordBool.value = false;
	}else {
		passwordBool.value = true;
	}
}

const btnModifyLeave = document.querySelector(".btn-modify-leave");

btnModifyLeave.onclick = () => {
	location.href = "/auth/mypage_leave";
}