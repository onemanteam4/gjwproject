

load();
function load() {
	
	$.ajax({
		async: false,
		type: "get",
		url: "/prefer",
		dataType: "json",
		success: (response) => {
			preferential(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}




function preferential(data){
	const ajaxContainer = document.querySelector("#ajaxContainer");
	const step1 = document.querySelector("#Step1");
	const step2 = document.querySelector("#Step2");	
	const step3 = document.querySelector("#Step3");
	const blank = document.querySelector(".blank");
	
	
	
	for(let content of data){
		let k = content.rateCode;
		let explan = content.discountExplanation;
		let explan2 = explan + "...";
		blank.style.display = "none";
		if(k <= 10){
		const udae =
		`
			<li class="containerRows">
                                <a href="/homediscount">
                                    <div class="photo" style="background-image: url(/static/img-kdh/preferential/${content.fileName}_${content.rateCode}.jpg);"></div>
                                    <div class="info">
                                        <span class="name">${content.discountName}</span>
                                        <p>${explan2}</p>
                                        <span></span>
                                    </div>
                                </a>
                            </li>
		`;
		
		ajaxContainer.innerHTML += udae;
		}
	}
	
		step1.onclick = () => {
		step2.style.border = '';
		step3.style.border = '';
		step1.style.border = "2px solid #ed1c24";
		
		ajaxContainer.innerHTML = '';
		
		for(let content of data){
		let k = content.rateCode;
		let explan = content.discountExplanation;
		let explan2 = explan + "...";
		if(k <= 10){
		const udae =
		`
			<li class="containerRows">
                                <a href="/homediscount">
                                    <div class="photo" style="background-image: url(/static/img-kdh/preferential/${content.fileName}_${content.rateCode}.jpg);"></div>
                                    <div class="info">
                                        <span class="name">${content.discountName}</span>
                                        <p>${explan2}</p>
                                        <span></span>
                                    </div>
                                </a>
                            </li>
		`;
		
		ajaxContainer.innerHTML += udae;
			}
		}
	}	
	
	step2.onclick = () => {
		step1.style.border = '';
		step3.style.border = '';
		step2.style.border = "2px solid #ed1c24";
		
		ajaxContainer.innerHTML = '';
		
		for(let content of data){
		let k = content.rateCode;
		let explan = content.discountExplanation;
		let explan2 = explan + "...";
		if(k = 11){
		const udae =
		`
			<li class="containerRows">
                                <a href="/carddiscount">
                                    <div class="photo" style="background-image: url(/static/img-kdh/preferential/${content.fileName}_${content.rateCode}.jpg);"></div>
                                    <div class="info">
                                        <span class="name">${content.discountName}</span>
                                        <p>${explan2}</p>
                                        <span></span>
                                    </div>
                                </a>
                            </li>
		`;
		
		ajaxContainer.innerHTML = udae;
			}
		}
	}	
	
	step3.onclick = () => {
		step1.style.border = '';
		step2.style.border = '';
		step3.style.border = "2px solid #ed1c24";
		
		ajaxContainer.innerHTML = '';
		
		blank.style.display = "block";
		const udae = 
		`
			<li class="blank">우대프로그램 정보가 없습니다.</li>
		`;
		ajaxContainer.innerHTML = udae;
	}
}




