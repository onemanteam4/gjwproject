let foodsCode = location.pathname.substring(location.pathname.lastIndexOf("/")+1);

let uri = "/snack/";

load(uri);



function load(uri){
	$.ajax({
		async:false,
		type:"get",
		url: uri + foodsCode,
		dataType: "json",
		success: (response)=>{
				foodexplanation(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}

function foodexplanation(data) {
	const facilityphotoarea = document.querySelector(".FacilityPhotoArea");
	
	const restaurantmenu = document.querySelector("#RestaurantMenu");
	
	const facilitymaparea = document.querySelector(".FacilityMapArea");
	
	
		// 푸드 설명
		facilityphotoarea.innerHTML=`
		<div id="AttractionsPhoto">
                        <div id="showImg" style="background-image: url(/static/img-kdh/foodview/${data[0].snackMainFile}_1.jpg);"></div>
                        <ul>
                            <li class="imgId" style="background-image: url(/static/img-kdh/foodview/${data[0].snackMainFile}_1.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/foodview/${data[0].snackMainFile}_2.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/foodview/${data[0].snackMainFile}_3.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/foodview/${data[0].snackMainFile}_4.jpg);"></li>
                        </ul>
                    </div>
                    <div id="AttractionsInfo">
                        <h4>${data[0].snackName}</h4>
                        <ul>
                            <li>
                                 ${data[0].snackExplanation}
                            </li>
                            <li>
                                <span>서비스</span>
                                ${data[0].snackService}
                            </li>
                        </ul>
                    </div>
	`;
	
	// 주요 메뉴 
	const menulist = document.querySelector(".menuList");
	
	for(let i=0; i < data.length; i++) {
		menulist.innerHTML += `
                        <li>
                            <div class="photo" style="background-image: url(/static/img-kdh/foodview/${data[0].snackFile}_${i+1}.jpg);"> </div>
                            <div class="food-info">
                                <span class="name">${data[i].snackMenu}</span>
                            </div>
                        </li>
	`; 
	}
	
	// 지도
	facilitymaparea.innerHTML = `
		<h4>위치정보</h4>
                    <div class="FacilityMap">
                        <img src="/static/img-kdh/foodview/${data[0].snackMainFile}_5.jpg">
                    </div>
	`;
	
	
	
}


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