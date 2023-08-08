for(i = 0; i < 5; i++){
	load(i);
}

function load(i){
	let snackCode = 1;
	snackCode = snackCode + i;
	$.ajax({
		async: false,
		type: "get",
		url: `/attfood/${snackCode}`,
		dataType: "json",
		success: (response) => {
			getfood(response.data);
			console.log(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}

function getfood(data) {
	
	const ajaxcontainer = document.querySelector("#ajaxContainer");
	for(let content of data){
		
		let foodexplan = content.snackExplanation;
		let foodexplan2 = foodexplan.substring(0, 38);
		
		const foodList = `
			<li class="ContainerRows" id="93">
                            
                                <div class="thumWrap">
                                    <div class="photo" style="background-image: url(/static/img-kdh/food/mainfood${content.snackCode}.jpg);"></div>
                                </div>
                                <div class="infomation">
                                    <span class="name">${content.snackName}</span>
                                    <p>${foodexplan2}</p>
                                </div>
                            </a>
                        </li>
		`;
		ajaxcontainer.innerHTML += foodList;
	}
}