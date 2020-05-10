

function computeHandler() {
	var durationSelector, loanText, resultText;
	var payment, formatter, dollarAmount;
	

	// Gather the page elements we need to interact with

	durationSelector = document.getElementById('duration');
	loanText = document.getElementById('loan');
	resultText = document.getElementById('result');


	// Start the computation
  if(loanText.value =='0') {
    payment = 0*payment;
  }
  else
  {
	  if (durationSelector.value == '36') {
			payment= loanText.value*(0.059/12)*Math.pow(1+0.059/12,36)/(Math.pow(1+0.059/12,36)-1);
		}
		else if(durationSelector.value == '48') {
			payment= loanText.value*(0.059/12)*Math.pow(1+0.059/12,48)/(Math.pow(1+0.059/12,48)-1);
		}
		else if(durationSelector.value == '60') {
    	payment = loanText.value*(0.059/12)*Math.pow(1+0.059/12,60)/(Math.pow(1+0.059/12,60)-1);
		}
	}

	formatter = new Intl.NumberFormat('en-US', {
	  style: 'currency',
	  currency: 'USD',
	  minimumFractionDigits: 2,
	});


	// Present the result
	dollarAmount = formatter.format(payment);
	resultText.textContent = 'Your monthy payment will be ' + dollarAmount + '.';
}

function setup() {
    var  compute;



    computeButton = document.getElementById('compute');
    computeButton.addEventListener('click',computeHandler,false);
}

window.addEventListener('load',setup,false);
