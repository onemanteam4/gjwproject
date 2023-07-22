const checkBtn = document.querySelector(".check-btn");
const signupId = document.querySelector("#signup-id");
const agreeCheckInput = document.querySelector(".agree-check-input");

let checkUsernameFlag = false;
let passwordCheckFlag = false;

checkBtn.onclick = () => {
	
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/signup/validation/userId",
		data: {userId : signupId.value},
		dataType: "json",
		success: (response) => {
			checkUsernameFlag = response.data;
			console.log(checkUsernameFlag);
			getValid(checkUsernameFlag);
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

const signupBtn = document.querySelector("#btn-signup");
const inputData = document.querySelectorAll(".input_wrap input");

signupBtn.onclick = () => {
	checkPassword();
	console.log(gendername.value);
	
	let signupData = {
		userId: inputData[0].value,
		userPassword:inputData[1].value,
		userEmail:inputData[4].value,
		userName:inputData[5].value,
		userGender: gendername.value,
		userBirth: inputData[9].value,
		userPhone: inputData[10].value,
		regionCode: 1,
		userRoles: "ROLE_USER",
		"checkUsernameFlag": checkUsernameFlag,
		checkagreeFlag: agreeCheckInput.value,
		passwordCheckFlag: passwordBool.value
		
	}
	
	$.ajax({
		async: false,
		type: "post",
		url: "/auth/signup",
		contentType: "application/json",
		data: JSON.stringify(signupData),
		dataType: "json",
		success: (response) => {
			if(response.data) {
				alert("회원가입성공");
				location.replace("/auth/signin");
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

/* 약관 동의 */
const allcheck = document.querySelector("#allchk");
const checkrows = document.querySelectorAll(".chkbox");
const chk1 = document.querySelector("#chk1")

checkbox();
function checkbox() {
	allcheck.onclick = () => {
		if(allcheck.checked == true) {
			for(let i = 1; i < checkrows.length; i++) {
				checkrows[i].checked = true;
			}
			agreeCheck();
		}else if(allcheck.checked == false) {
			for(let i = 1; i < checkrows.length; i++) {
				checkrows[i].checked = false;
			}
			agreeCheck();
		}
	}

	for(let i = 1; i < checkrows.length; i++) {
		checkrows[i].onclick = () => {
			if(checkrows[i].checked == false) {
				allcheck.checked = false;
				agreeCheck();
			}else {
				agreeCheck();
			}
		}
	}
	
}

function agreeCheck() {
	if(checkrows[1].checked == true && checkrows[2].checked == true) {
		agreeCheckInput.value = true;
	} else {
		agreeCheckInput.value = false;
	}
}
/* 약관동의 끝 */

/* 성별확인 */
const genderType = document.querySelectorAll(".radio-type input");
const gendername = document.querySelector(".gendername");
gendername.value = "남자";
getGender();
function getGender() {
	genderType[1].onclick = () => {
		genderType[1].checked = true;
		gendername.value = "남자";
	}
	genderType[2].onclick = () => {
		genderType[2].checked = true;
		gendername.value = "여자";
	}
	
}
/*성별확인 끝 */

/*아이디 중복확인*/
function getValid(flag) {
	const idCheck = document.querySelector("#check-result");
	if(flag) {
		idCheck.innerText = "사용가능한 아이디입니다."
		idCheck.classList.remove("false");
	} else {
		idCheck.innerText = "이미 사용중인 아이디입니다."
		if(idCheck.className == "check-result") {
			idCheck.classList.add("false");
		}
	}
	
}

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

/*
chkSignupPw.onblur = () => {
		let pas1 = signupPw.value;
		let pas2 = chkSignupPw.value;
		console.log("signupPw.value"+signupPw.value);
		console.log("chkSignupPw.value"+chkSignupPw.value);
		console.log("pas1"+pas1);
		console.log("pas2"+pas2);
		if(pas1 != pas2) {
			alert("비밀번호가 일치하지 않습니다.");
		}else {
			alert("비밀번호가 일치합니다.");
		}
}
*/

/* location db에서 가져오기 */









