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
let imgCount = 0;
let slideCount = boxSliderList.length;


banner();

let slideWidth = -1903;

function banner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    setInterval( () => {
        

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
       

}


//메인 슬라이드
const centerMainBannerList = document.querySelector(".center-main-banner-list");
const bannerList = document.querySelectorAll(".center-main-banner-list li");
const sliderPre = document.querySelector(".sliderPre");
const sliderNext = document.querySelector(".sliderNext");
let x = centerMainBannerList.style.transform;
let result = x.substring(x.lastIndexOf("-")+1, 17);
mainbanner();

function mainbanner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    let time = setInterval( () => {
        

        centerMainBannerList.style.transition = 'transform 0.5s ease-out';
        centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index+1) + 'px, 0px, 0px)';
        index ++;
        
        console.log(index+1);
        if( index >= 7) {
            index = -1;

            setTimeout(() => {
                centerMainBannerList.style.transition = 'transform 0s ease-out';
                centerMainBannerList.style.transform = 'translate3d( -3900px, 0px, 0px)';
            }, 501)
        }
    }, 10000);
       
    centerMainBannerList.onmouseover = () => {
        clearInterval(time);
        console.log("멈춰!");
    }

    centerMainBannerList.onmouseout = () => {

        index = 0;
        time = setInterval( () => {
            console.log("재시작!");

            centerMainBannerList.style.transition = 'transform 0.5s ease-out';
            centerMainBannerList.style.transform = 'translate3d(-'+ 1300*(index+1) + 'px, 0px, 0px)';
            index ++;
            
            console.log(index+1);
            if( index >= 7) {
                index = -1;
    
                setTimeout(() => {
                    centerMainBannerList.style.transition = 'transform 0s ease-out';
                    centerMainBannerList.style.transform = 'translate3d( -3900px, 0px, 0px)';
                }, 501)
            }
        }, 10000);
    }
}

let currentIndex = 0;



sliderPre.onclick = () => {
    currentIndex --;
    currentIndex = currentIndex < 0 ? 0 : currentIndex;
    centerMainBannerList.style.transition = 'transform 0.5s ease-out';
    centerMainBannerList.style.transform ='translate3d (-' + result + 'px, 0px, 0px)';
    console.log(centerMainBannerList.style.transform ='translate3d(-' + result + 'px, 0px, 0px)');

    console.log(centerMainBannerList.style.transform = 'translate3d(-'+ 1300*2 + 'px, 0px, 0px)');
}


let index = 0;
sliderNext.onclick = () => {
    
    index ++;
    centerMainBannerList.style.transition = 'transform 0.5s ease-out';
    centerMainBannerList.style.transform = 'translate3d(-'+ 1300*index + 'px, 0px, 0px)';
    if(index >= 7) {
        index=3
    }
    console.log("ㅇㅇ" + index);
}

//어트랙션 슬라이드

const AttractionboxSlider = document.querySelector(".box-slider");
const AttractionList = document.querySelectorAll(".box-slider li");

attractionbanner();

function attractionbanner () {
    // for(let i = 0; i < boxSliderList.length; i++) {
    //     imgCount++;
    // }

    let index = 0;

    setInterval( () => {
        

        AttractionboxSlider.style.transition = 'transform 0.5s ease-out';
        AttractionboxSlider.style.transform = 'translate3d(-' + 1225*(index+1) + 'px, 0px, 0px)';
        index ++;
        
        console.log(index);
        if( index >= bannerList.length-4) {
            index = -1;

            setTimeout(() => {
                AttractionboxSlider.style.transition = 'transform 0s ease-out';
                AttractionboxSlider.style.transform = 'translate3d( 0px, 0px, 0px)';
            }, 1001)

        }
    }, 5000);
       

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
