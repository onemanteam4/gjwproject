let facilCode = location.pathname.substring(location.pathname.lastIndexOf("/")+1);


let uri = "/facilily/";
load(uri);
function load(uri){
	$.ajax({
		async:false,
		type:"get",
		url: uri + facilCode,
		dataType: "json",
		success: (response)=> {
			getfacil(response.data[0]);
		},
		error: (error) => {
			console.log(error);
		}
	})
}


function getfacil(facilviewList){
	
	const attractionsinfo = document.querySelector("#AttractionsInfo");
	
	const attractionsphoto = document.querySelector("#AttractionsPhoto");
	
	const facilitymapArea = document.querySelector(".FacilityMapArea");
	
	
	attractionsphoto.innerHTML = `
		<div id="showImg" style="background-image: url(/static/img-kdh/facilview/${facilviewList.serviceFile}_1.jpg);"></div>
                        <ul>
                            <li class="imgId" style="background-image: url(/static/img-kdh/facilview/${facilviewList.serviceFile}_2.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/facilview/${facilviewList.serviceFile}_3.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/facilview/${facilviewList.serviceFile}_4.jpg);"></li>
                            <li class="imgId" style="background-image: url(/static/img-kdh/facilview/${facilviewList.serviceFile}_5.jpg);"></li>
                        </ul>
	`;
	
	attractionsinfo.innerHTML = `
		<h4> ${facilviewList.serviceName} </h4>
                        <ul>
                            <li>
                                ${facilviewList.serviceExplanation}
                            </li>
                            <li>
                                <span>서비스</span>
                                ${facilviewList.serviceService}
                            </li>
                        </ul>
	`;
	
	
	facilitymapArea.innerHTML = `
		<h4>위치정보</h4>
                    <div class="FacilityMap">
                        <img src="/static/img-kdh/facilview/${facilviewList.serviceFile}_6.jpg" alt="">
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
