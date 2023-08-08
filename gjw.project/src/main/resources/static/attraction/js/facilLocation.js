const facilNumber = document.querySelectorAll("#ajaxContainer li");


for(let i = 0; i < facilNumber.length; i++){
	facilNumber[i].onclick = () => {
	location.href = "/facilityview/" + (i+1);
	
}
}