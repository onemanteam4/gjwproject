const innerPrice = document.querySelectorAll(".inner dd");
const totalPrice = document.querySelector(".total span");
let regularPrice = innerPrice[0].textContent * 1;
let discountedPrice = innerPrice[1].textContent * -1;

let visitNameFlag = false;
let visitPhoneFlag = false;
let visitEmailFlag = false;


function showlist(num) {
    const list = document.querySelectorAll(".list");

    if(list[num].className == "list on") {
        list[num].classList.remove("on");
    }else if (list[num].className == "list") {
        list[num].classList.add("on");
    }
}

function getTicket() {
	let ticket = null;
	$.ajax({
		async: false,
		type: "get",
		url: uri + typeNum,
		dataType: "json",
		success: (response) => {
			ticket = response.data;
		}, error: (error) => {
			console.log(error);
		}
	});
	return ticket;
}


const ticketEstimate = document.querySelector(".ticket-estimate");

let dateY = localStorage.getItem("dateYear");
let dateM = localStorage.getItem("dateMonth");
let dateD = localStorage.getItem("dateDay");
let optionData = JSON.parse(localStorage.getItem("optionCount"));

load();

function load() {
	ticketEstimate.innerHTML = 
	"<dt>방문 예정 날짜</dt><dd>" + dateY + "-" + dateM + "-" + dateD + "</dd>"
	+"<dt>이용기간</dt>"
	+"<dd>" + dateY + "-" + dateM + "-" + dateD + "~" + dateY + "-" + dateM + "-" + dateD + "</dd>"
	+"<dt>선택 권종</dt>"
	+`
	<dd class="option-detail">
		
    </dd>
    ` 
}

const optionDetail = document.querySelector(".option-detail");
load2();
function load2() {
	if(optionData.cardN > 0 && optionData.cardN < 6) {
		optionDetail.innerHTML += `
			<div class="detail-list" id="detail-card">
		        <img src="/static/donguk-img/payment/card.jpg" alt="카드사 제휴 할인">
		        <strong>카드사 제휴 할인</strong>
		        <b></b>
		        <dl class = "list-details-c">
		        
		        </dl>
		    </div>
		`
	}
	if(optionData.gamBN > 0 || optionData.gamSN > 0) {
		optionDetail.innerHTML += `
			<div class="detail-list"  id="detail-gam">
		        <img src="/static/donguk-img/payment/gamsung.png" alt="감성교복 패키지(특가)" class="thumb">
		        <strong>감성교복 패키지(특가)</strong>
		        <b></b>
		        <dl class = "list-details-g">

		        </dl>
		    </div>
		`
	}
	if(optionData.kbBN > 0 || optionData.kbSN > 0) {
		optionDetail.innerHTML += `
			<div class="detail-list" id="detail-kb">
		        <img src="/static/donguk-img/payment/kbpay.jpg" alt="KBPAY 특가">
		        <strong>KBPAY 특가</strong>
		        <b></b>
		        <dl class = "list-details-k">

		        </dl>
		    </div>
		`
	}
	if(optionData.onBN > 0 || optionData.onMN > 0 || optionData.onSN > 0) {
		optionDetail.innerHTML += `
			<div class="detail-list"  id="detail-online">
		        <img src="/static/donguk-img/payment/free.png" alt="온라인 회원 할인">
		        <strong>온라인 회원 할인</strong>
		        <b></b>
		        <dl class = "list-details-o">

		        </dl>
		    </div>
		`
	}
	if(optionData.afBN > 0 || optionData.afSN > 0) {
		optionDetail.innerHTML += `
			<div class="detail-list"  id="detail-after">
		        <img src="/static/donguk-img/payment/after.jpg" alt="야간 할인권">
		        <strong>야간 할인권(4시)</strong>
		        <b></b>
		        <dl class = "list-details-a">

		        </dl>
		    </div>
		`
	}
}


loadDetail();
function loadDetail() {
	const listDetailsC = document.querySelector(".list-details-c");
	const detailListC = document.querySelector("#detail-card b");
	const listDetailsG = document.querySelector(".list-details-g");
	const detailListG = document.querySelector("#detail-gam b");
	const listDetailsK = document.querySelector(".list-details-k");
	const detailListK = document.querySelector("#detail-kb b");
	const listDetailsO = document.querySelector(".list-details-o");
	const detailListO = document.querySelector("#detail-online b");
	const listDetailsA = document.querySelector(".list-details-a");
	const detailListA = document.querySelector("#detail-after b");
	
	if(optionData.cardN > 0 && optionData.cardN < 6) {
		uri = "/payment/ticket/1/";
		typeNum = optionData.cardN;
		let ticketC = getTicket(uri);
		listDetailsC.innerHTML += "<dt>" + ticketC[0].typeName + " : 1매</dt>" + "<dd>" + ticketC[0].typePrice + "원</dd>";
		detailListC.innerText = ticketC[0].typePrice + "원";
		regularPrice += ticketC[0].typeRegularPrice;
		discountedPrice -= ticketC[0].typeDiscountedPrice;
		
	}
	
	if(optionData.gamBN > 0 || optionData.gamSN > 0) {
			uri = "/payment/ticket/2/";
			typeNum = 1;
			let ticketGB = getTicket(uri);
			let gbPrice = optionData.gamBN * ticketGB[0].typePrice;			
			typeNum = 2;
			let ticketGS = getTicket(uri);
			let gsPrice = optionData.gamSN * ticketGS[0].typePrice;			
		if(optionData.gamBN > 0) {
			listDetailsG.innerHTML += "<dt>" + ticketGB[0].typeName + " : " + optionData.gamBN + "매</dt>" + "<dd>" + gbPrice + "원</dd>";
			regularPrice += (ticketGB[0].typeRegularPrice * optionData.gamBN);
			discountedPrice -= (ticketGB[0].typeDiscountedPrice * optionData.gamBN);
		}
		if(optionData.gamSN > 0) {
			listDetailsG.innerHTML += "<dt>" + ticketGS[0].typeName + " : " + optionData.gamSN + "매</dt>" + "<dd>" + gsPrice + "원</dd>";
			regularPrice += (ticketGS[0].typeRegularPrice * optionData.gamSN);
			discountedPrice -= (ticketGS[0].typeDiscountedPrice * optionData.gamSN);
		}
		detailListG.innerText = gbPrice + gsPrice + "원";
	}
	
	if(optionData.kbBN > 0 || optionData.kbSN > 0) {
		uri = "/payment/ticket/3/"
		typeNum = 1;
		let ticketKB = getTicket(uri);	
		let kbPrice = optionData.kbBN * ticketKB[0].typePrice;
		typeNum = 2;
		let ticketKS = getTicket(uri);
		let ksPrice = optionData.kbSN * ticketKS[0].typePrice;
		if(optionData.kbBN > 0) {
			listDetailsK.innerHTML += "<dt>" + ticketKB[0].typeName + " : " + optionData.kbBN + "매</dt>" + "<dd>" + kbPrice + "원</dd>";
			regularPrice += (ticketKB[0].typeRegularPrice * optionData.kbBN);
			discountedPrice -= (ticketKB[0].typeDiscountedPrice * optionData.kbBN);
		}
		if(optionData.kbSN > 0) {
			listDetailsK.innerHTML += "<dt>" + ticketKS[0].typeName + " : " + optionData.kbSN + "매</dt>" + "<dd>" + ksPrice + "원</dd>";
			regularPrice += (ticketKS[0].typeRegularPrice * optionData.kbSN);
			discountedPrice -= (ticketKS[0].typeDiscountedPrice * optionData.kbSN);
		}
		detailListK.innerText = kbPrice + ksPrice + "원";
	}
	
	if(optionData.onBN > 0 || optionData.onMN > 0 || optionData.onSN > 0) {
		uri = "/payment/ticket/4/"
		typeNum = 1;
		let ticketOB = getTicket(uri);
		let obPrice = optionData.onBN * ticketOB[0].typePrice;
		typeNum = 2;
		let ticketOM = getTicket(uri);
		let omPrice = optionData.onMN * ticketOM[0].typePrice;
		typeNum = 3;
		let ticketOS = getTicket(uri);
		let osPrice = optionData.onSN * ticketOS[0].typePrice;
		if(optionData.onBN > 0) {
			listDetailsO.innerHTML += "<dt>" + ticketOB[0].typeName + " : " + optionData.onBN + "매</dt>" + "<dd>" + obPrice + "원</dd>";
			regularPrice += (ticketOB[0].typeRegularPrice * optionData.onBN);
			discountedPrice -= (ticketOB[0].typeDiscountedPrice * optionData.onBN);
		}
		if(optionData.onMN > 0) {
			listDetailsO.innerHTML += "<dt>" + ticketOM[0].typeName + " : " + optionData.onMN + "매</dt>" + "<dd>" + omPrice + "원</dd>";
			regularPrice += (ticketOM[0].typeRegularPrice * optionData.onMN);
			discountedPrice -= (ticketOM[0].typeDiscountedPrice * optionData.onMN);
		}
		if(optionData.onSN > 0) {
			listDetailsO.innerHTML += "<dt>" + ticketOS[0].typeName + " : " + optionData.onSN + "매</dt>" + "<dd>" + osPrice + "원</dd>";
			regularPrice += (ticketOS[0].typeRegularPrice * optionData.onSN);
			discountedPrice -= (ticketOS[0].typeDiscountedPrice * optionData.onSN);
		}
		detailListO.innerText = obPrice + omPrice + osPrice + "원";
	}
	
	if(optionData.afBN > 0 || optionData.afSN > 0) {
		uri = "/payment/ticket/5/"
		typeNum = 1;
		let ticketAB = getTicket(uri);
		let abPrice = optionData.afBN * ticketAB[0].typePrice;
		typeNum = 2;
		let ticketAS = getTicket(uri);
		let asPrice = optionData.afSN * ticketAS[0].typePrice;
		if(optionData.afBN > 0) {
			listDetailsA.innerHTML += "<dt>" + ticketAB[0].typeName + " : " + optionData.afBN + "매</dt>" + "<dd>" + abPrice + "원</dd>";
			regularPrice += (ticketAB[0].typeRegularPrice * optionData.afBN);
			discountedPrice -= (ticketAB[0].typeDiscountedPrice * optionData.afBN);
		}
		if(optionData.afSN > 0) {
			listDetailsA.innerHTML += "<dt>" + ticketAS[0].typeName + " : " + optionData.afSN + "매</dt>" + "<dd>" + asPrice + "원</dd>";
			regularPrice += (ticketAS[0].typeRegularPrice * optionData.afSN);
			discountedPrice -= (ticketAS[0].typeDiscountedPrice * optionData.afSN);
		}
		detailListA.innerText = abPrice + asPrice + "원";
	}
	innerPrice[0].textContent = regularPrice + "원";
	innerPrice[1].textContent = discountedPrice + "원";
	totalPrice.textContent = regularPrice + discountedPrice;
}

let totalAllPrice = totalPrice.textContent;
const sameVisitorBtn = document.querySelector(".same-visitor input");
const inputType = document.querySelectorAll(".input-wrap input");
sameVisitorBtn.onclick = () => {
	if(sameVisitorBtn.checked == true) {
		let user = getUser();
		inputType[0].value = user.user_name;
		inputType[1].value = user.user_phone;
		inputType[2].value = user.user_email;
		visitNameFlag = true;
		visitPhoneFlag = true;
		visitEmailFlag = true;
	} else if(sameVisitorBtn.checked == false) {
		inputType[0].value = "";
		inputType[1].value = "";
		inputType[2].value = "";
		visitNameFlag = false;
		visitPhoneFlag = false;
		visitEmailFlag = false;
	}
}

function checkVisit() {
	const nameReg = /^[가-힣]{2,4}$/;
	const phoneReg = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
	const emailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	
	if(nameReg.test(inputType[0].value)) {
		visitNameFlag = true;
	} else {
		visitNameFlag = false;
	}
	if(phoneReg.test(inputType[1].value)) {
		visitPhoneFlag = true;
	} else {
		visitPhoneFlag = false;
	}
	if(emailReg.test(inputType[2].value)) {
		visitEmailFlag = true;
	} else {
		visitEmailFlag = false;
	}
}

const payBtn = document.querySelector(".pay-btn");

payBtn.onclick = () => {
	checkVisit();
	
	let data = {
		totalPrice: totalAllPrice,
		visitNameFlag: visitNameFlag,
		visitPhoneFlag: visitPhoneFlag,
		visitEmailFlag: visitEmailFlag
	}
	
	$.ajax({
		async: false,
		type: "post",
		url: "/kakaopay/ready",
		contentType: "application/json",
		data: JSON.stringify(data),
		dataType: "json",
		success: (response) => {
			location.href = response.data.next_redirect_pc_url;
		},error: (error) => {
			if(error.status == 400) {
				   alert(JSON.stringify(error.responseJSON.data))
			   }else {
				   console.log("요청실패");
				   console.log(error);
			   }
		}
	})
}














