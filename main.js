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

Chart.defaults.global.legend.display = false;

//traffic chart

let trafficChart = new Chart(trfChrt, {
	type: 'line',
	data: {
			labels: ["20-25", "26-30", "1-5", "6-10", "11-15", "16-20", "21-25", "26-31", "1-5"],
			datasets: [{
				label: '',
				data: [],
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
		scales: {
			yAxes: [{
				ticks: {
						beginAtZero:true
				}
			}]
		}
	}
});


//daily traffic chart

let dailyTrafficChart = new Chart(dlyTrfChrt, {
	type: 'bar',
	data: {
			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
						beginAtZero:true
				}
			}]
		}
	}
});

//mobile user chart

let mobileUserChart = new Chart(mblUsrChrt, {
    type: 'doughnut',
    data: {
			labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
			datasets: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
	},
	options: {
		
	}
});