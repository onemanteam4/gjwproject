let attCode = location.pathname.substring(location.pathname.lastIndexOf("/")+1);

let uri = "/attraction/";
load(uri);
function load(uri){
	$.ajax({
		async:false,
		type:"get",
		url: uri + attCode,
		dataType: "json",
		success: (response)=> {
			getatt(response.data[0]);
			console.log(response.data[0]);
			
		},
		error: (error) => {
			console.log(error);
		}
	})
}



function getatt(attList) {
	const attractionsinfo = document.querySelector("#AttractionsInfo");
	
	attractionsinfo.innerHTML= `
						<h4>${attList.rideName}</h4>
                        <ul>
                            <li>
                                ${attList.rideExplanation}
                    
                            </li>
                            <li>
                                <span>테마분류</span>
                                ${attList.rideThemeFamily} ${attList.rideThemeFriend} ${attList.rideThemeCouple} ${attList.rideThemeThrill} ${attList.rideThemeRain}
                            </li>
                            <li>
                                <span>위치</span>
                                ${attList.rideLocationCode}
                                
                            </li>
                            <li>
                                <span>탑승인원</span>
                                ${attList.rideBoardingNum}
                            </li>
                            <li>
                                <span>키제한</span>
                                ${attList.rideHeightMin}cm-${attList.rideHeightMax}cm
                            </li>
                            <li>
                                <span>비고</span>
                                ${attList.rideExtra}
                            </li>
                        </ul>
	`;
	
	
}