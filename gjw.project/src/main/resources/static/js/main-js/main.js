const operationTimeCalendar = document.querySelector(".operation-time-calendar");
const viewCalendar = document.querySelector(".view-calendar");




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

console.log(boxPagerLink.length);


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
        
        console.log(index);
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
        console.log("멈춰!");
    }

    boxSlider.onmouseout = () => {

        index = 0;
        time = setInterval( () => {
            console.log("재시작!");

            boxSlider.style.transition = 'transform 1s ease-out';
            boxSlider.style.transform = 'translate3d(-'+ 1903*(index+1) + 'px, 0px, 0px)';
            index ++;
            
            console.log(index+1);
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


//메인 슬라이드
const centerMainBannerList = document.querySelector(".center-main-banner-list");
const bannerList = document.querySelectorAll(".center-main-banner-list li");
const sliderPre = document.querySelector(".sliderPre");
const sliderNext = document.querySelector(".sliderNext");

const MainSliderBtn = document.querySelector(".main-slider-btn");

mainbanner();

function mainbanner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

	let index = 1;
    

    let time = setInterval( () => {
        

        centerMainBannerList.style.transition = 'transform 0.5s ease-out';
        centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index) + 'px, 0px, 0px)';
        
		sliderPre.onclick = () => {
			console.log("이건?!" + index);
	    	index = index - 1;
			console.log("이건?!!" + index);
			
			
			centerMainBannerList.style.transition = 'transform 0.5s ease-out';
	    	centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index + -1)+ 'px, 0px, 0px)';
	    	console.log("이건?!!!!" + index);
	    if(index <= 2) {
	        index=10;
	        
                setTimeout(() => {
			centerMainBannerList.style.transition = 'transform 0s ease-out';
	    	centerMainBannerList.style.transform = 'translate3d(-11700px, 0px, 0px)';
                }, 530)
	        
	    }
	}
        
        
        
        
        
        index ++;
        
    	sliderNext.onclick = () => {
    		
		console.log(index);
		centerMainBannerList.style.transition = 'transform 0.5s ease-out';
		centerMainBannerList.style.transform = 'translate3d(-'+ 1300*index + 'px, 0px, 0px)';
		
		index = index + 1;
		console.log("이건?" + index);
		if(index >= 10) {
		    index=1;
		    
                setTimeout(() => {
                    centerMainBannerList.style.transition = 'transform 0s ease-out';
                    centerMainBannerList.style.transform = 'translate3d( -1300px, 0px, 0px)';
                }, 550)
    }
}
		


		
        console.log(index+1);
        if( index >= 9) {
            index = 1;

            setTimeout(() => {
                centerMainBannerList.style.transition = 'transform 0s ease-out';
                centerMainBannerList.style.transform = 'translate3d( -1300px, 0px, 0px)';
            }, 501)
        }
    }, 10000);
       
    centerMainBannerList.onmouseover = () => {
        clearInterval(time);
        console.log("멈춰!");
    }
    
    MainSliderBtn.onmouseover = () => {
        clearInterval(time);
        console.log("멈춰!");
    }

    centerMainBannerList.onmouseout = () => {
		
        
        time = setInterval( () => {
			
			
            console.log("재시작 메인!" + index);
            centerMainBannerList.style.transition = 'transform 0.5s ease-out';
            centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index) + 'px, 0px, 0px)';
            index ++;
            
            console.log(index+1);
            if( index >= 10) {
                index = 1;
    
                setTimeout(() => {
                    centerMainBannerList.style.transition = 'transform 0s ease-out';
                    centerMainBannerList.style.transform = 'translate3d( -1300px, 0px, 0px)';
                }, 501)
            }
        }, 10000);
    }
        MainSliderBtn.onmouseout = () => {


        time = setInterval( () => {
			
            console.log("재시작 버튼!" + index);
            centerMainBannerList.style.transition = 'transform 0.5s ease-out';
            centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index) + 'px, 0px, 0px)';
            index ++;
            
            console.log(index+1);
            if( index >= 10) {
                index = 1;
    
                setTimeout(() => {
                    centerMainBannerList.style.transition = 'transform 0s ease-out';
                    centerMainBannerList.style.transform = 'translate3d( -1300px, 0px, 0px)';
                }, 501)
            }
        }, 10000);
    }
}

let currentIndex = 0;



/*sliderPre.onclick = () => {
    currentIndex --;
    currentIndex = currentIndex < 0 ? 0 : currentIndex;
    centerMainBannerList.style.transition = 'transform 0.5s ease-out';
    centerMainBannerList.style.transform ='translate3d (-' + result + 'px, 0px, 0px)';
    console.log(centerMainBannerList.style.transform ='translate3d(-' + result + 'px, 0px, 0px)');

    console.log(centerMainBannerList.style.transform = 'translate3d(-'+ 1300*2 + 'px, 0px, 0px)');
}*/






//어트랙션 슬라이드

const AttractionboxSlider = document.querySelector(".box-slider");
const AttractionList = document.querySelectorAll(".box-slider li");
const boxPre = document.querySelector(".box-pre");
const boxNext = document.querySelector(".box-next");
const boxs = document.querySelector(".main-attraction-buttons");

attractionbanner();

function attractionbanner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    setInterval( () => {
        

        AttractionboxSlider.style.transition = 'transform 0.5s ease-out';
        AttractionboxSlider.style.transform = 'translate3d(-' + 1225*(index) + 'px, 0px, 0px)';
        
        boxPre.onclick = () => {
			console.log("과연?!! " + index);
			index = index - 1;
			console.log("과연?!! " + index);
			AttractionboxSlider.style.transition = 'transform 0.5s ease-out';
        	AttractionboxSlider.style.transform = 'translate3d(-' + 1225*(index) + 'px, 0px, 0px)';
		
			
			if(index <= -1) {
				AttractionboxSlider.style.transition = 'transform 0s ease-out';
                AttractionboxSlider.style.transform = 'translate3d( -7350px, 0px, 0px)';
                index = 6;
			}
		}
        
        
        
        index ++;
        console.log(index);
        boxNext.onclick = () => {
			AttractionboxSlider.style.transition = 'transform 0.5s ease-out';
        	AttractionboxSlider.style.transform = 'translate3d(-' + 1225*(index) + 'px, 0px, 0px)';
        	
        	
        	index = index + 1;
        	console.log("과연?" + index);
        	if(index >= 7) {
				setTimeout(() => {
                	AttractionboxSlider.style.transition = 'transform 0s ease-out';
                	AttractionboxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            		}, 530)
                index = 0;
			}
 			
		}
		
		
		
        console.log("과연?!" + index);
        if( index >= 7) {
            index = 0;

            setTimeout(() => {
                AttractionboxSlider.style.transition = 'transform 0s ease-out';
                AttractionboxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            }, 550)

        }
    }, 10000);

	
}


const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const noticeDetailsList = document.querySelectorAll(".notice-list-details li");


let int = 0;
downBtn.onclick = () => {
	const noticeDetails = document.querySelector(".notice-list-details");
	int = int+1;
	console.log("작동" + int);
	noticeDetails.style.tranform = 'translate3d(0px, -117px, 0px)';
	noticeDetails.style.transition = 'transform 0s ease-out';
	console.log(noticeDetails.style.tranform);
}




//눈으로 보는 가이드 슬라이드

const guideSlider = document.querySelector(".guide-slider");
const guideList = document.querySelectorAll(".guide-slider li");

guidebanner();

function guidebanner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    setInterval( () => {
        

        guideSlider.style.transition = 'transform 1s ease-out';
        guideSlider.style.transform = 'translate3d(-' + 936*(index+1) + 'px, 0px, 0px)';
        index ++;
        
        console.log(index);
        if( index >= 4) {
            index = -1;

            setTimeout(() => {
                guideSlider.style.transition = 'transform 0s ease-out';
                guideSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            }, 1001)
        }
    }, 5000);
       

}
