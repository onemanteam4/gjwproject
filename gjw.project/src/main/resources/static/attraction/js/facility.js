for(i = 0; i < 5; i++){
	load(i);
}

function load(i){
	let serviceCode = 1;
	serviceCode = serviceCode + i;
	$.ajax({
		async: false,
		type: "get",
		url: `/attservice/${serviceCode}`,
		dataType: "json",
		success: (response) => {
			getfacility(response.data);
			console.log(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}

function getfacility(data) {
	
	const ajaxcontainer = document.querySelector("#ajaxContainer");
	for(let content of data){
		
		let facilexplan = content.serviceExplanation;
		let facilexplans = facilexplan.substring(0, 39);
		
		const facilList = `
			<li class="ContainerRows" id="88">
                            
                                <div class="thumWrap">
                                    <div class="photo" style="background-image: url(/static/img-kdh/facility/mainfacil${content.serviceCode}.jpg);"></div>
                                </div>
                                <div class="infomation">
                                    <span class="name">${content.serviceName}</span>
                                    <p>${facilexplans}</p>
                                </div>
                            </a>
                        </li>
		`;
		ajaxcontainer.innerHTML += facilList;
	}
}



