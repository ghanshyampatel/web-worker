var first = document.querySelector('#number1');
var result = document.querySelector('.result');

if (window.Worker) { 

	var myWorker = new Worker("workerfile.js");

	first.onchange = function() {
	  myWorker.postMessage([first.value]); 
	  console.log('Message posted to worker');
	};
	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
