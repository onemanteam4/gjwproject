google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
		
      	['Month', '예약자 수'],
      	['2023-01',  loadAllTicket("2023-01")],
      	['2023-02',  loadAllTicket("2023-02")],
      	['2023-03',  loadAllTicket("2023-03")],
      	['2023-04',  loadAllTicket("2023-04")],
      	['2023-05',  loadAllTicket("2023-05")],
      	['2023-06',  loadAllTicket("2023-06")],
      	['2023-07',  loadAllTicket("2023-07")],
     	['2023-08',  loadAllTicket("2023-08")],
      	['2023-09',  loadAllTicket("2023-09")],
      	['2023-10',  loadAllTicket("2023-10")],
      	['2023-11',  loadAllTicket("2023-11")],
      	['2023-12',  loadAllTicket("2023-12")]
    ]);

    var options = {
      	title: '월별 예약자 수 2023년',
      	width: 1400,
   	  	height: 800,
      	legend: { position: 'bottom' },
      	pointSize: 7,
		vAxis: {
			viewWindow: {
    			max: 5,
    			min: 0
            },
            gridlines: {
				minSpacing: 50
			}
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

	chart.draw(data, options);
}

function loadAllTicket(year) {
	let count = null;
	$.ajax({
		async: false,
		type: "get",
		url: "/auth/admin/getAllTicket/" + year,
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