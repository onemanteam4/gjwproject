google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['남자', loadAllTicket("남자")],
    ['여자', loadAllTicket("여자")]

  ]);

  var options = {
    title: '회원 성별',
    colors: ['#2ECCFA', '#FF4000']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

function loadAllTicket(gender) {
	let count = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/admin/userInfo/" + gender,
		dataType: "json",
		success: (response) => {
			count = response.data
		},
		error: (error) => {
			console.log(error);
		}
	})
	return count;
}

const backBtn = document.querySelector(".back-btn");
backBtn.onclick = () => {
	location.href = "/admin/main";
}




