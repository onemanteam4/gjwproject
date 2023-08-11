const rideNumber = document.querySelectorAll("#ajaxContainer li");


for(let i = 0; i < rideNumber.length; i++){
	rideNumber[i].onclick = () => {
	location.href = "/attride/" + (i+1);
	
}
}







 
 

 
 
 
 

