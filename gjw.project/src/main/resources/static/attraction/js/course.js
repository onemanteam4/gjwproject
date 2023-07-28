




function courseload(){
	
	$.ajax({
		async: true,
		type: "get",
		url: `/kdh-amusement/RcdCourse/{rideThemeCode}`,
		dataType: "json",
		success: (response) => {
			result = response.data;
			console.log(result);
			
		},
		error: errorMessage
	})
}

function getcourse(courseList) {
	
}