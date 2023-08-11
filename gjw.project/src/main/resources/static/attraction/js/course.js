let rcdCode = location.pathname.substring(location.pathname.lastIndexOf("/")+1);



function changeimg() {
	if(rcdCode == 1){
		document.getElementById("Click1").src = "/static/img-kdh/restimg/family_2.png";
	}else if(rcdCode == 2) {
		document.getElementById("Click2").src = "/static/img-kdh/restimg/friend_2.png";
	}else if(rcdCode == 3) {
		document.getElementById("Click3").src = "/static/img-kdh/restimg/couple_2.png";
	}else if(rcdCode == 4) {
		document.getElementById("Click4").src = "/static/img-kdh/restimg/thrili_2.png";
	}else if(rcdCode ==5) {
		document.getElementById("Click5").src = "/static/img-kdh/restimg/rain_2.png";
	}
}
changeimg();


let uri = "/RcdCourse/";
load(uri);
function load(uri){
	$.ajax({
		async: true,
		type: "get",
		url: uri + rcdCode,
		dataType: "json",
		success: (response) => {
			getrcd(response.data);
		},
		error: (error) => {
			console.log("에러입니다.");
		}
	})
}



function getrcd(courseList) {
	
	const recommendedcourselist = document.querySelector("#RecommendedCourseList");
	
	if(rcdCode == 1) {
		recommendedcourselist.innerHTML= `
					 <h5>
                        <b>가족</b>끼리
                    </h5>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/1">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[0].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[0].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[0].locationName}</span>
                            </div>
                            <div class="num"> 01 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/18">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[85].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[85].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[85].locationName}</span>
                            </div>
                            <div class="num"> 02 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/7">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[30].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[30].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[30].locationName}</span>
                            </div>
                            <div class="num"> 03 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/8">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[35].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[35].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[35].locationName}</span>
                            </div>
                            <div class="num"> 04 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/9">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[44].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[44].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[44].locationName}</span>
                            </div>
                            <div class="num"> 05 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/11">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[50].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[50].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[50].locationName}</span>
                            </div>
                            <div class="num"> 06 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/13">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[60].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[60].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[60].locationName}</span>
                            </div>
                            <div class="num"> 07 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/23">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[115].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[115].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[115].locationName}</span>
                            </div>
                            <div class="num"> 08 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/24">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[120].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[120].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[120].locationName}</span>
                            </div>
                            <div class="num"> 09 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/19">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[90].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[90].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[90].locationName}</span>
                            </div>
                            <div class="num"> 10 </div>
                        </a>
                    </div>
	`;
	}else if(rcdCode == 2) {
		recommendedcourselist.innerHTML= `
					 <h5>
                        <b>친구</b>끼리
                    </h5>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/1">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[1].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[1].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[1].locationName}</span>
                            </div>
                            <div class="num"> 01 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/4">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[16].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[16].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[16].locationName}</span>
                            </div>
                            <div class="num"> 02 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/3">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[11].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[11].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[11].locationName}</span>
                            </div>
                            <div class="num"> 03 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/22">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[111].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[111].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[111].locationName}</span>
                            </div>
                            <div class="num"> 04 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/25">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[126].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[126].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[126].locationName}</span>
                            </div>
                            <div class="num"> 05 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/14">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[66].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[66].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[66].locationName}</span>
                            </div>
                            <div class="num"> 06 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/5">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[21].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[21].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[21].locationName}</span>
                            </div>
                            <div class="num"> 07 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/15">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[71].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[71].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[71].locationName}</span>
                            </div>
                            <div class="num"> 08 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/17">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[81].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[81].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[81].locationName}</span>
                            </div>
                            <div class="num"> 09 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/16">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[76].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[76].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[76].locationName}</span>
                            </div>
                            <div class="num"> 10 </div>
                        </a>
                    </div>
	`;
	}else if(rcdCode == 3){
		recommendedcourselist.innerHTML= `
					 <h5>
                        <b>연인</b>끼리
                    </h5>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/1">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[1].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[1].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[1].locationName}</span>
                            </div>
                            <div class="num"> 01 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/4">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[16].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[16].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[16].locationName}</span>
                            </div>
                            <div class="num"> 02 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/3">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[11].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[11].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[11].locationName}</span>
                            </div>
                            <div class="num"> 03 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/11">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[52].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[52].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[52].locationName}</span>
                            </div>
                            <div class="num"> 04 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/12">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[57].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[57].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[57].locationName}</span>
                            </div>
                            <div class="num"> 05 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/22">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[112].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[112].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[112].locationName}</span>
                            </div>
                            <div class="num"> 06 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/23">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[117].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[117].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[117].locationName}</span>
                            </div>
                            <div class="num"> 07 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/19">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[67].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[67].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[67].locationName}</span>
                            </div>
                            <div class="num"> 08 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/15">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[72].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[72].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[72].locationName}</span>
                            </div>
                            <div class="num"> 09 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/16">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[77].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[77].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[77].locationName}</span>
                            </div>
                            <div class="num"> 10 </div>
                        </a>
                    </div>
	`;
	}else if(rcdCode == 4){
		recommendedcourselist.innerHTML= `
					 <h5>
                        <b>스릴</b>즐기기
                    </h5>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/1">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[3].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[3].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[3].locationName}</span>
                            </div>
                            <div class="num"> 01 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/4">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[18].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[18].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[18].locationName}</span>
                            </div>
                            <div class="num"> 02 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/3">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[13].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[13].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[13].locationName}</span>
                            </div>
                            <div class="num"> 03 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/2">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[8].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[8].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[8].locationName}</span>
                            </div>
                            <div class="num"> 04 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/23">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[113].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[113].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[113].locationName}</span>
                            </div>
                            <div class="num"> 05 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/6">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[28].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[28].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[28].locationName}</span>
                            </div>
                            <div class="num"> 06 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/14">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[68].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[68].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[68].locationName}</span>
                            </div>
                            <div class="num"> 07 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/5">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[23].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[23].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[23].locationName}</span>
                            </div>
                            <div class="num"> 08 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/15">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[73].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[73].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[73].locationName}</span>
                            </div>
                            <div class="num"> 09 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/22">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[108].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[108].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[108].locationName}</span>
                            </div>
                            <div class="num"> 10 </div>
                        </a>
                    </div>
	`;
	}else if(rcdCode == 5) {
		recommendedcourselist.innerHTML= `
					 <h5>
                        <b>비</b>오는날
                    </h5>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/7">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[34].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[34].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[34].locationName}</span>
                            </div>
                            <div class="num"> 01 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/9">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[44].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[44].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[44].locationName}</span>
                            </div>
                            <div class="num"> 02 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/12">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[59].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[59].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[59].locationName}</span>
                            </div>
                            <div class="num"> 03 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/25">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[124].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[124].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[124].locationName}</span>
                            </div>
                            <div class="num"> 04 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/26">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[128].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[129].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[129].locationName}</span>
                            </div>
                            <div class="num"> 05 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/15">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[74].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[74].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[74].locationName}</span>
                            </div>
                            <div class="num"> 06 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/17">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[84].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[84].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[84].locationName}</span>
                            </div>
                            <div class="num"> 07 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/16">
                            <div class="photo" style="background-image:url(/static/img-kdh/mainimg/view${courseList[79].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[79].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[79].locationName}</span>
                            </div>
                            <div class="num"> 08 </div>
                        </a>
                    </div>
                    <div class="CourseList">
                        <a href="http://localhost:8000/attride/22">
                            <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${courseList[109].rideCode}.jpg);"> </div>
                            <div class="title">
                                <span class="name">${courseList[109].rideName}</span>
                            </div>
                            <div class="zone">
                                <span class="name">${courseList[109].locationName}</span>
                            </div>
                            <div class="num"> 09 </div>
                        </a>
                    </div>
                    
	`;
	}
	
		
	
	
	
}


