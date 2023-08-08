const foodNumber = document.querySelectorAll("#ajaxContainer li");


	for(let i = 0; i < foodNumber.length; i++){
		foodNumber[i].onclick = () => {
		location.href = "/foodview/" + (i+1);
		console.log("zzzzzzzzzzzz");
	
	}
}