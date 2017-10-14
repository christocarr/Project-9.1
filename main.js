//function to add mobile and tab menu

function menuFunction() {
    var x = document.getElementById("menu");
    if (x.className === "active") {
        x.className += "clicked";
    } else {
        x.className = "active";
    }
}

//function for closing alert 

function alertCloseFunction () {
  let closeButton = document.getElementById("alertCloseButton");
  let alertClose = closeButton.parentElement;
  alertClose.className += "close";
}

//Charts

const trfChrt = document.getElementById('trafficChart');

const dlyTrfChrt = document.getElementById('dailyTrafficChart');

const mblUsrChrt = document.getElementById('mobileUserChart');

//traffic chart

let trafficChart = new Chart(trfChrt, {
	type: 'line',
	data: {
			labels: ["20-25", "26-30", "1-5", "6-10", "11-15", "16-20", "21-25", "26-31", "1-5"],
			datasets: [{
				label: '',
				data: [0, 500, 1200, 700, 1240, 1150, 2360, 2280, 2420],
				backgroundColor: [
					'rgba(54, 162, 235, 0.2)',
				],
				borderColor: [
					'rgba(54, 162, 235, 1)',
				],
				borderWidth: 1,
				lineTension: 0
			}]
	},
	options: {
		legend: {
			display: false		
		},

		scales: {
			yAxes: [{
				gridLines: {
						drawTicks: false,
						
				},
				ticks: {
						beginAtZero:true,
						stepSize: 500,
						min: 0,
				}
			}]
		}
	}
});


//daily traffic chart

let dailyTrafficChart = new Chart(dlyTrfChrt, {
	type: 'bar',
	data: {
			labels: ["S", "M", "T", "W", "T", "F", "S"],
			datasets: [{
				label: '# of Votes',
				data: [50, 80, 150, 100, 200, 170, 90],
				backgroundColor: [
					'rgb(65, 105, 225)',
					'rgb(65, 105, 225)',
					'rgb(65, 105, 225)',
					'rgb(65, 105, 225)',
					'rgb(65, 105, 225)',
					'rgb(65, 105, 225)',
					'rgb(65, 105, 225)'
				]
			}]
	},
	options: {
		legend: {
			display: false		
		},
		scales: {
			xAxes: [{
				barPercentage: 0.6
			}],
			yAxes: [{
				gridLines: {
						drawTicks: false,
						offsetGridLines: false
				},
				ticks: {
						beginAtZero:false,
						stepSize: 50,
						min: 0,
				}
			}]
		}
	}
});

//mobile user chart

let mobileUserChart = new Chart(mblUsrChrt, {
    type: 'doughnut',
    data: {
			labels: ["Phones", "Tablets", "Desktop"],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3],
				backgroundColor: [
					'rgb(65, 105, 225)',
					'rgb(54, 162, 235)',
					'rgb(38, 196, 17)'
				]
			}]
	},
	options: {
		legend: {
			position: 'right',
			labels: {
				boxWidth : 12
			}
		},
		segmentShowStroke: false
	}
});