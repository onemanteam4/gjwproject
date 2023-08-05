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
	// 세부설명
	const attractionsinfo = document.querySelector("#AttractionsInfo");
	// 사진
	const attractionsphoto = document.querySelector("#AttractionsPhoto");
	// 지도
	const facilitymaparea = document.querySelector(".FacilityMapArea");
	
	attractionsphoto.innerHTML=`
		 <div id="showImg" style="background-image: url(/static/img-kdh/attractions/${attList.fileName}_1.gif);"></div>
                        <ul id="imgList">
                            <li class="imgId" style="background-image: url(/static/img-kdh/attractions/${attList.fileName}_1.gif);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/attractions/${attList.fileName}_3.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/attractions/${attList.fileName}_4.jpg);"></li>
                            <li class="imgId"  style="background-image: url(/static/img-kdh/attractions/${attList.fileName}_5.jpg);"></li>
                        </ul>
	`;
	console.log(attractionsphoto.innerHTML);
	
	
	
	
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
	
	facilitymaparea.innerHTML=`
		<div class="FacilityMap">
                        <img src="/static/img-kdh/attractions/${attList.fileName}_6.jpg" alt="">
                    </div>
	`;
	
}

// let은 재할당 가능 const는 불가
function changeimg(){
	const showimg = document.querySelector("#showImg");
	const clickimg = document.querySelectorAll(".imgId");
	
	for(let i = 0; i < clickimg.length; i++){
		clickimg[i].addEventListener("click", function(){
			let clickimg2 = this.style.backgroundImage.substring(5, this.style.backgroundImage.length - 2);
			
			showimg.style.backgroundImage = `url(${clickimg2})`;
		});
	}
}
changeimg();
console.log(changeimg);









