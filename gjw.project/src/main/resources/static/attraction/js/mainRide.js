let checktheme = document.querySelectorAll(".theme");
const height = document.querySelector("#height");

for(i=0; i < 26; i++){
	load(i);
}

function load(i) {
	let rideCode = 1;
	rideCode = rideCode + i;
	console.log(rideCode);
	$.ajax({
		async: false,
		type: "get",
		url: `/mainride/${rideCode}`,
		dataType: "json",
		success: (response) => {
			getride(response.data);
			console.log(response.data);
			
		},
		error: (error) => {
			console.log(error);
		}
	})
}



function getride(data) {
	
	const attractionlist = document.querySelector("#AttractionList");
	
	const containerrows = document.querySelector("#ajaxContainer");
	
	for(let content of data){
		
		let explan = content.rideExplanation;
		let explan2 = explan.substring(0, 38).replaceAll("br")+"...";
		console.log(explan2);
		
		
		const mainList = 
		`
			<li class="ContainerRows" id="1">
                           
                                <div class="thumwrap">
                                    <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${content.rideCode}.jpg);"> </div>
                                    <span class="loction">${content.locationName}</span>
                                </div>
                                <div class="infomation">
                                    <span class="name">${content.rideName}</span>
                                    <p>${explan2}</p>
                                </div>
                            </a>
                        </li>
		`;
		containerrows.innerHTML += mainList;
		
		console.log(mainList);
		
		
	}
	
}

// html이 출력되면 바로 실행
document.addEventListener("DOMContentLoaded", function () {
  let ItemCount = 10;
  const loadMoreButton = document.querySelector("#GetMore");
  const itemContainer = document.querySelector("#ajaxContainer");
	//초기 보여주는 이미지
  function showMoreItem() {
    ItemCount += 10;
    ItemCount = Math.min(ItemCount, itemContainer.childElementCount);
    updateItem();
  }

  function updateItem() {
    for (let i = 0; i < itemContainer.childElementCount; i++) {
      itemContainer.children[i].style.display = "none";
    }
	// 갯수만큼 보이게 하기
    for (let i = 0; i < ItemCount; i++) {
      itemContainer.children[i].style.display = "inline-block";
    }
	// 더보기 숨기거나 남아있으면 보이게 
    if (ItemCount >= itemContainer.childElementCount) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "inline-block";
      
    }
    
  }

  loadMoreButton.addEventListener("click", showMoreItem);

  updateItem();
});



function checklist(num) {
	
		if(checktheme[num].checked == true){
			console.log("체크성공");
			
			checktheme[num].value = "1";
			console.log(checktheme[num].value);
		}else if(checktheme[num].checked == false){
			checktheme[num].value = "0";
			console.log(checktheme[num].value);
		}
}


const searchBtn = document.querySelector(".searchBtn");

searchBtn.onclick = () => {
	
	const containerrows = document.querySelector("#ajaxContainer");
    containerrows.innerHTML = '';
	
	
	console.log(checktheme[0].value);
	console.log(checktheme[1].value);
	console.log(checktheme[2].value);
	console.log(checktheme[3].value);
	console.log(checktheme[4].value);
	console.log(height.value);
	
	$.ajax({
		async: false,
		type: "get",
		url: "/mainride/search",
		data: {
			rideThemeFamily: checktheme[0].value,
			rideThemeFriend: checktheme[2].value,
			rideThemeCouple: checktheme[1].value,
			rideThemeRain: checktheme[3].value,
			rideThemeThrill: checktheme[4].value,
			height: height.value
		},
		dataType: "json",
		success: (response) => {
			searchride(response.data);
			console.log(response.data);
		},
		error: (error) => {
			console.log(error);
		}
	})
}


function searchride(data) {
	
	const attractionlist = document.querySelector("#AttractionList");
	
	const containerrowss = document.querySelector("#ajaxContainer");
	
	for(let content of data){
		
		let explan = content.rideExplanation;
		let explan2 = explan.substring(0, 38).replaceAll("br")+"...";
		console.log(explan2);
		
		
		const searchList = 
		`
			<li class="ContainerRows" id="1" searchridecode="${content.rideCode}">
                           
                                <div class="thumwrap">
                                    <div class="photo" style="background-image: url(/static/img-kdh/mainimg/view${content.rideCode}.jpg);"> </div>
                                    <span class="loction">${content.locationName}</span>
                                </div>
                                <div class="infomation">
                                    <span class="name">${content.rideName}</span>
                                    <p>${explan2}</p>
                                </div>
                            </a>
                        </li>
		`;
		containerrowss.innerHTML += searchList;
		
		console.log(searchList);
	}
	  
	  const rideNumber = document.querySelectorAll("#ajaxContainer li");
    for (let i = 0; i < rideNumber.length; i++) {
        rideNumber[i].onclick = () => {
           
            const ridecodes = rideNumber[i].getAttribute("searchridecode");
            location.href = "/attride/" + ridecodes;
        };
    }
}



