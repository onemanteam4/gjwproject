const rideNumber = document.querySelectorAll(".ContainerRows");


for(let i = 0; i < rideNumber.length; i++){
	rideNumber[i].onclick = () => {
	location.href = "/attride/" + (i+1);
}
}







 
 

 
 
 
 

