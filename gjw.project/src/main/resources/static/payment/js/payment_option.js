const ticketName = document.querySelectorAll(".ticket-name");
const ticketList = document.querySelectorAll(".ticket-list");
const optionArea = document.querySelectorAll(".option-area");

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

/*
class hi {

    username = "choi";
    hello() {
        alert("hihi");
    };
}

let kim = new hi();

console.log(kim.hello());
console.log(kim.username);
*/