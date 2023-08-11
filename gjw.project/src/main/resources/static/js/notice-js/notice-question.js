

const FAQ = document.querySelectorAll(".FAQ-list ul li");
const answerWrap = document.querySelectorAll(".answer-wrap");


for(let i = 0; i < FAQ.length; i++) {
	FAQ[i].onclick = () => {
	console.log(i);
	if(answerWrap[i].style.display == 'none') {
		answerWrap[i].style.display = 'block';
		answerWrap[i].style.opacity = '1';
	}else {
		answerWrap[i].style.display = 'none';
		answerWrap[i].style.opacity = '0';
	}
	
}

}













