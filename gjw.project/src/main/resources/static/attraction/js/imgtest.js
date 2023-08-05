
let formData = new FormData(document.querySelector("form"));

$.ajax({
	async: false,
	type: "post",
	url: "/test11",
	enctype: "multipart/form-data",
	contentType: false,
	processData: false,
	data: formData,
	dataType: "json",
	success: (response)=> {
		(response.data)
	},
	error: (error) => {
		console.log(error);
	}
})