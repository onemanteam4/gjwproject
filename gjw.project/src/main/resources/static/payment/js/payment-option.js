const ticketName = document.querySelectorAll(".ticket-name");
const ticketList = document.querySelectorAll(".ticket-list");
const optionArea = document.querySelectorAll(".option-area");

const ticketEstimate = document.querySelector(".ticket-estimate");


let dateY = localStorage.getItem("dateYear");
let dateM = localStorage.getItem("dateMonth");
let dateD = localStorage.getItem("dateDay");



load();
function load() {
	ticketEstimate.innerHTML = 
	"<dt>방문 예정 날짜</dt><dd>" + dateY + "-" + dateM + "-" + dateD + "</dd><dt>이용기간</dt><dd>" + dateY + "-" + dateM + "-" + dateD + "~" + dateY + "-" + dateM + "-" + dateD + "</dd>";
}

let cardN = 0;
let gamBN = 0;
let gamSN = 0;
let kbBN = 0;
let kbSN = 0;
let onBN = 0;
let onMN = 0;
let onSN = 0;
let afBN = 0;
let afSN = 0;


for(let i = 0; i < ticketName.length; i++) {
    ticketName[i].onclick = () => {
        
        if(optionArea[i].style.display == 'none') {
            optionArea[i].style.display = 'block';
            ticketList[i].classList.add("on");
        }else if(optionArea[i].style.display == 'block') {
            optionArea[i].style.display = 'none';
            ticketList[i].classList.remove("on");
        }
    }
}

/* 카드 */
function cardDecrease(num, price) {
    const inputNum = document.querySelectorAll("#option1 input");
    const optionTotal = document.querySelector("#subtotal1");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let toTotal = Number(allTotal.value);

    if(result >= 1) {
        result -= 1;
        inputNum[num].value = result;

        total -= price;
        optionTotal.value = total;

        toTotal -= price;
        allTotal.value = toTotal;
    }
    
}

function cardIncrease(num, price) {
    const inputNum = document.querySelectorAll("#option1 input");
    const optionTotal = document.querySelector("#subtotal1");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let sum = Number(inputNum[0].value) + Number(inputNum[1].value) + Number(inputNum[2].value) + Number(inputNum[3].value) + Number(inputNum[4].value);
    let toTotal = Number(allTotal.value);

    if(result >= 1) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    }else if(sum >= 1) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    } else if(result >= 0) {
        result += 1;
        inputNum[num].value = result;

        total += price;
        optionTotal.value = total;

        toTotal += price;
        allTotal.value = toTotal;
    }
}

/* 교복 */
function gamDecrease(num, price) {
    const inputNum = document.querySelectorAll("#option2 input");
    const optionTotal = document.querySelector("#subtotal2");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let toTotal = Number(allTotal.value);

    if(result >= 1) {
        result -= 1;
        inputNum[num].value = result;

        total -= price;
        optionTotal.value = total;

        toTotal -= price;
        allTotal.value = toTotal;
    }
    
}

function gamIncrease(num, price) {
    const inputNum = document.querySelectorAll("#option2 input");
    const optionTotal = document.querySelector("#subtotal2");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let sum = Number(inputNum[0].value) + Number(inputNum[1].value);
    let toTotal = Number(allTotal.value);

    if(result >= 15) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    }else if(sum >= 15) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    } else if(result >= 0) {
        result += 1;
        inputNum[num].value = result;

        total += price;
        optionTotal.value = total;

        toTotal += price;
        allTotal.value = toTotal;
    }

}

/* KB */
function kbDecrease(num, price) {
    const inputNum = document.querySelectorAll("#option3 input");
    const optionTotal = document.querySelector("#subtotal3");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let toTotal = Number(allTotal.value);

    if(result >= 1) {
        result -= 1;
        inputNum[num].value = result;

        total -= price;
        optionTotal.value = total;

        toTotal -= price;
        allTotal.value = toTotal;
    }

}

function kbIncrease(num, price) {
    const inputNum = document.querySelectorAll("#option3 input");
    const optionTotal = document.querySelector("#subtotal3");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let sum = Number(inputNum[0].value) + Number(inputNum[1].value);
    let toTotal = Number(allTotal.value);

    if(result >= 2) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    }else if(sum >= 2) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    } else if(result >= 0) {
        result += 1;
        inputNum[num].value = result;

        total += price;
        optionTotal.value = total;

        toTotal += price;
        allTotal.value = toTotal;
    }

}

/* 온라인 */
function onDecrease(num, price) {
    const inputNum = document.querySelectorAll("#option4 input");
    const optionTotal = document.querySelector("#subtotal4");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let toTotal = Number(allTotal.value);

    if(result >= 1) {
        result -= 1;
        inputNum[num].value = result;

        total -= price;
        optionTotal.value = total;

        toTotal -= price;
        allTotal.value = toTotal;
    }
    
}

function onIncrease(num, price) {
    const inputNum = document.querySelectorAll("#option4 input");
    const optionTotal = document.querySelector("#subtotal4");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let sum = Number(inputNum[0].value) + Number(inputNum[1].value) + Number(inputNum[2].value);
    let toTotal = Number(allTotal.value);

    if(result >= 15) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    }else if(sum >= 15) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    } else if(result >= 0) {
        result += 1;
        inputNum[num].value = result;

        total += price;
        optionTotal.value = total;

        toTotal += price;
        allTotal.value = toTotal;
    }

}

/* 오후 */
function afDecrease(num, price) {
    const inputNum = document.querySelectorAll("#option5 input");
    const optionTotal = document.querySelector("#subtotal5");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let toTotal = Number(allTotal.value);


    if(result >= 1) {
        result -= 1;
        inputNum[num].value = result;

        total -= price;
        optionTotal.value = total;

        toTotal -= price;
        allTotal.value = toTotal;
    }

}

function afIncrease(num, price) {
    const inputNum = document.querySelectorAll("#option5 input");
    const optionTotal = document.querySelector("#subtotal5");
    const allTotal = document.querySelector(".amount-input input");

    let result = Number(inputNum[num].value);
    let total = Number(optionTotal.value);
    let sum = Number(inputNum[0].value) + Number(inputNum[1].value);
    let toTotal = Number(allTotal.value);

    if(result >= 15) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    }else if(sum >= 15) {
        alert("최대 선택가능 수량을 초과했습니다.\n추가 선택이 불가능 합니다.");
    } else if(result >= 0) {
        result += 1;
        inputNum[num].value = result;

        total += price;
        optionTotal.value = total;

        toTotal += price;
        allTotal.value = toTotal;
    }

}




console.log(getUser());


const nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () => {

	const inputNum1 = document.querySelectorAll("#option1 input");
	const inputNum2 = document.querySelectorAll("#option2 input");
	const inputNum3 = document.querySelectorAll("#option3 input");
	const inputNum4 = document.querySelectorAll("#option4 input");
	const inputNum5 = document.querySelectorAll("#option5 input");

	for(let i = 0; i < inputNum1.length; i++) {
		let cardNum = Number(inputNum1[i].value);
		if(cardNum == 1) {
			cardN = inputNum1[i].id;
		}
	}
	
	gamBN = Number(inputNum2[0].value);
	gamSN = Number(inputNum2[1].value);
	kbBN = Number(inputNum3[0].value);
	kbSN = Number(inputNum3[1].value);
	onBN = Number(inputNum4[0].value);
	onMN = Number(inputNum4[1].value);
	onSN = Number(inputNum4[2].value);
	afBN = Number(inputNum5[0].value);
	afSN = Number(inputNum5[1].value);
	
	let optionCount = {
		"cardN" : cardN,
		"gamBN" : gamBN,
		"gamSN" : gamSN,
		"kbBN" : kbBN,
		"kbSN" : kbSN,
		"onBN" : onBN,
		"onMN" : onMN,
		"onSN" : onSN,
		"afBN" : afBN,
		"afSN" : afSN,
	}
	
	
	localStorage.setItem("optionCount", JSON.stringify(optionCount));

	location.href = "/payment/payment_pay";
}
/*
const signinBtn = document.querySelector(".signin-btn");
signinBtn.onclick = () => {
	location.href = "/auth/signin";
}*/
const backBtn = document.querySelector(".back-btn");
backBtn.onclick = () => {
	location.href = "/payment/payment_select";
}














