//메인 슬라이드
const centerMainBannerList = document.querySelector(".center-main-banner-list");
const bannerList = document.querySelectorAll(".center-main-banner-list li");
const sliderPre = document.querySelector(".sliderPre");
const sliderNext = document.querySelector(".sliderNext");

const MainSliderBtn = document.querySelector(".main-slider-btn");

mainbanner();

function mainbanner () {


	let index = 1;
    

    let time = setInterval( () => {
        

        centerMainBannerList.style.transition = 'transform 0.5s ease-out';
        centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index) + 'px, 0px, 0px)';
        
		sliderPre.onclick = () => {
	    	index = index - 1;
			
			
			centerMainBannerList.style.transition = 'transform 0.5s ease-out';
	    	centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index + -1)+ 'px, 0px, 0px)';
	    if(index <= 2) {
	        index=10;
	        
                setTimeout(() => {
			centerMainBannerList.style.transition = 'transform 0s ease-out';
	    	centerMainBannerList.style.transform = 'translate3d(-11700px, 0px, 0px)';
                }, 501)
	        
	    }
	}
        
        
        
        
        
        index ++;
        
    	sliderNext.onclick = () => {
    		
		centerMainBannerList.style.transition = 'transform 0.5s ease-out';
		centerMainBannerList.style.transform = 'translate3d(-'+ 1300*index + 'px, 0px, 0px)';
		
		index = index + 1;
		if(index >= 10) {
		    index=1;
		    
                setTimeout(() => {
                    centerMainBannerList.style.transition = 'transform 0s ease-out';
                    centerMainBannerList.style.transform = 'translate3d( -1300px, 0px, 0px)';
                }, 550)
    }
}
		


		
        if( index >= 10) {
            index = 1;

            setTimeout(() => {
                centerMainBannerList.style.transition = 'transform 0s ease-out';
                centerMainBannerList.style.transform = 'translate3d( -1300px, 0px, 0px)';
            }, 501)
        }
    }, 10000);
       
    centerMainBannerList.onmouseover = () => {
        clearInterval(time);
    }
    
    MainSliderBtn.onmouseover = () => {
        clearInterval(time);
    }

    centerMainBannerList.onmouseout = () => {
		
        
        time = setInterval( () => {
			
			
            centerMainBannerList.style.transition = 'transform 0.5s ease-out';
            centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index) + 'px, 0px, 0px)';
            index ++;
            
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
			
            centerMainBannerList.style.transition = 'transform 0.5s ease-out';
            centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index) + 'px, 0px, 0px)';
            index ++;
            
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
			index = index - 1;
			AttractionboxSlider.style.transition = 'transform 0.5s ease-out';
        	AttractionboxSlider.style.transform = 'translate3d(-' + 1225*(index) + 'px, 0px, 0px)';
		
			
			if(index <= -1) {
				AttractionboxSlider.style.transition = 'transform 0s ease-out';
                AttractionboxSlider.style.transform = 'translate3d( -7350px, 0px, 0px)';
                index = 6;
			}
		}
        
        
        
        index ++;
        boxNext.onclick = () => {
			AttractionboxSlider.style.transition = 'transform 0.5s ease-out';
        	AttractionboxSlider.style.transform = 'translate3d(-' + 1225*(index) + 'px, 0px, 0px)';
        	
        	
        	index = index + 1;
        	if(index >= 7) {
				setTimeout(() => {
                	AttractionboxSlider.style.transition = 'transform 0s ease-out';
                	AttractionboxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            		}, 530)
                index = 0;
			}
 			
		}
		
		
		
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


simpleList();
function simpleList() {
	let p = 0;
	
	downBtn.onclick = () => {

		for(let y = 0; y < noticeDetailsList.length; y++) {
                    noticeDetailsList[y].style.display = 'none';
                }
		p++;
		if(p < noticeDetailsList.length) {
			
			noticeDetailsList[p].style.display = 'block';
		}else {
			noticeDetailsList[4].style.display = 'block';
			p = 4;
		}
		
	}
	
	upBtn.onclick = () => {
		for(let y = 0; y < noticeDetailsList.length; y++) {
                    noticeDetailsList[y].style.display = 'none';
                }
		p--;
		if(p >= 0) {
			noticeDetailsList[p].style.display = 'block';
		} else {
			noticeDetailsList[0].style.display = 'block';
			p = 0;
		}
		
		

	}
}





//눈으로 보는 가이드 슬라이드

const guideSlider = document.querySelector(".guide-slider");
const guideList = document.querySelectorAll(".guide-slider li");
const mainGuideButtenDirection = document.querySelector(".main-guide-butten-direction a");
const guidePre = document.querySelector(".guide-pre");
const guideNext = document.querySelector(".guide-next");
const mainGuideBoxViewport = document.querySelector(".main-guide-box-viewport");


guidebanner();

function guidebanner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    let time = setInterval( () => {
        

        guideSlider.style.transition = 'transform 1s ease-out';
        guideSlider.style.transform = 'translate3d(-' + 936*(index) + 'px, 0px, 0px)';
        
        guidePre.onclick = () => {
			index = index - 1;
			
			guideSlider.style.transition = 'transform 0.5s ease-out';
        	guideSlider.style.transform = 'translate3d(-' + 936*(index) + 'px, 0px, 0px)';
		
			if(index <= -1) {
				guideSlider.style.transition = 'transform 0s ease-out';
                guideSlider.style.transform = 'translate3d( -3744px, 0px, 0px)';
                index = 4;
			}
		}
        
        
        index ++;
        
        if( index >= 5) {
            index = 0;

            setTimeout(() => {
                guideSlider.style.transition = 'transform 0s ease-out';
                guideSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            }, 1050)
        }
        
         guideNext.onclick = () => {
		   
	   	guideSlider.style.transition = 'transform 1s ease-out';
        guideSlider.style.transform = 'translate3d(-' + 936*(index) + 'px, 0px, 0px)';
	   
	   	index = index + 1;
       if( index >= 5) {
        index = 0;

        setTimeout(() => {
			
	    	guideSlider.style.transition = 'transform 0s ease-out';
        	guideSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
        }, 1050)
        }
	   }

        
    }, 5000);
       
       guidePre.onmouseover = () => {
        clearInterval(time);
    }
    
      guidePre.onmouseout = () => {
		
        
        time = setInterval( () => {
			
			
            
	   	guideSlider.style.transition = 'transform 1s ease-out';
        guideSlider.style.transform = 'translate3d(-' + 936*(index) + 'px, 0px, 0px)';
            index ++;
            
       	if( index >= 4) {
        	index = 0;

        	setTimeout(() => {
			
	    	guideSlider.style.transition = 'transform 0s ease-out';
        	guideSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
        }, 1050)
        }
        }, 5000);
    }
    
    
    
       guideNext.onmouseover = () => {
        clearInterval(time);
    }
    
      guideNext.onmouseout = () => {
		
        
        time = setInterval( () => {
			
			
            
	   	guideSlider.style.transition = 'transform 1s ease-out';
        guideSlider.style.transform = 'translate3d(-' + 936*(index) + 'px, 0px, 0px)';
            index ++;
            
       	if( index >= 4) {
        	index = 0;

        	setTimeout(() => {
			
	    	guideSlider.style.transition = 'transform 0s ease-out';
        	guideSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
        }, 1050)
        }
        }, 5000);
    }
    
           mainGuideBoxViewport.onmouseover = () => {
        clearInterval(time);
    }
    
      mainGuideBoxViewport.onmouseout = () => {
		
        
        time = setInterval( () => {
			
			
            
	   	guideSlider.style.transition = 'transform 1s ease-out';
        guideSlider.style.transform = 'translate3d(-' + 936*(index) + 'px, 0px, 0px)';
            index ++;
            
       	if( index >= 4) {
        	index = 0;

        	setTimeout(() => {
			
	    	guideSlider.style.transition = 'transform 0s ease-out';
        	guideSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
        }, 1050)
        }
        }, 5000);
    }

}
