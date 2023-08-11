function getPrincipal() {
	let user = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/principal",
		dataType: "json",
		success: (response) => {
			user = response.data;
		},
		error: (error) => {
			console.log(error);
		}
	});
	return user;
}

function loadHeader(user) {
	const header = document.querySelector(".main-top-list");
	
	if(user == null) {
		header.innerHTML = `
		        <ul>
                    <li>
                        <a href="/index">홈</a>
                    </li>
                    <li>
                        <a href="/auth/signin">로그인</a>
                    </li>
                    <li>
                        <a href="/auth/signup_first">회원가입</a>
                    </li>
                    <li class="reservation">
                        <a href="단체예약 사이트 주소" style="color: #f26c4f;">단체예약</a>
                    </li>
                    <li class="reservation">
                        <a href="연간이용권 사이트 주소" style="color: #f26c4f;">연간이용권</a>
                    </li>
                    <li class="choice">
	                    <a href="">
                        	<img src="/static/main-image/main-logo/google.png" style="height: 19px; width: 19;">
                            <span> 언어 선택 </span>
                            <img src="/static/main-image/main-logo/languge.png" class="choice-img">
                        </a>
		                
                    </li>
            	</ul>
        `
	} else {
		header.innerHTML = `
		        <ul>
                    <li>
                        <a href="/index">홈</a>
                    </li>
                    <li>
                        <a href="/logout">로그아웃</a>
                    </li>
                    <li>
                        <a href="/auth/mypage">마이페이지</a>
                    </li>
                    <li class="reservation">
                        <a href="단체예약 사이트 주소" style="color: #f26c4f;">단체예약</a>
                    </li>
                    <li class="reservation">
                        <a href="연간이용권 사이트 주소" style="color: #f26c4f;">연간이용권</a>
                    </li>
                    <li class="choice">
                    	
                        <a href="">
                        	<img src="/static/main-image/main-logo/google.png" style="height: 19px; width: 19;">
                            <span> 언어 선택 </span>
                            <img src="/static/main-image/main-logo/languge.png" class="choice-img">
                        </a>
                    </li>
            	</ul>
		        
        `
	}
}

let user = getPrincipal();
loadHeader(user);


const listHover = document.querySelector(".list-hover");
const hover = document.querySelectorAll(".hover");
const mainTopMenu = document.querySelector(".main-top-menu");




//탑 메뉴 오버시 나오게
mainTopMenu.onmouseover = () => {
    for(let i = 0; i < hover.length; i++) {
        if(hover[i].style.display == 'none') {
            hover[i].style.display = 'block';
            hover[i].style.opacity = '1';
    
            mainTopMenu.style.height = '374px';
        }else {
            hover[i].style.display = 'none';
            hover[i].style.opacity = '0';
        }
    }
}

mainTopMenu.onmouseout = () => {
    for(let i = 0; i < hover.length; i++) {
        if(hover[i].style.display == 'block') {
            hover[i].style.display = 'none';
            hover[i].style.opacity = '0';
    
            mainTopMenu.style.height = '56px';
        }else {
            hover[i].style.display = 'block';
            hover[i].style.opacity = '1';
        }
    }
}

//오른쪽 이미지 오버시 나오게
const quickController = document.querySelector("#quickController");

quickController.onmouseover = () => {
    quickController.style.right = '-75px';
}

quickController.onmouseout = () => {
    quickController.style.right = '-145px';
}



//맨 위 배너 슬라이드
const boxSlider = document.querySelector(".box-slider-list");
const boxSliderList = document.querySelectorAll(".box-slider-list li");

const boxPagerLink = document.querySelectorAll(".box-pager div a");



for(let x = 0; x < boxPagerLink.length; x++) {
	boxPagerLink[x].onclick = () => {
		boxSlider.style.transition = 'transform 0.5s ease-out';
        boxSlider.style.transform = 'translate3d(-' + 1903*x + 'px, 0px, 0px)';
	}
}




let imgCount = 0;
let slideCount = boxSliderList.length;


banner();

let slideWidth = -1903;

function banner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    let time = setInterval( () => {
        

        boxSlider.style.transition = 'transform 1s ease-out';
        boxSlider.style.transform = 'translate3d(-' + 1903*(index+1) + 'px, 0px, 0px)';
        index ++;
        
        if( index >= 5) {
            index = -1;
            setTimeout(() => {
                boxSlider.style.transition = 'transform 0s ease-out';
                boxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            }, 1010)
        }
    }, 10000);
    boxSlider.onmouseover = () => {
        clearInterval(time);
    }

    boxSlider.onmouseout = () => {

        index = 0;
        time = setInterval( () => {

            boxSlider.style.transition = 'transform 1s ease-out';
            boxSlider.style.transform = 'translate3d(-'+ 1903*(index+1) + 'px, 0px, 0px)';
            index ++;
            
            if( index >= 5) {
                index = -1;
    
                setTimeout(() => {
                    boxSlider.style.transition = 'transform 0s ease-out';
                    boxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
                }, 501)
            }
        }, 10000);
    }
       

}