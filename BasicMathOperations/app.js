let sumOfInput = function (input) {
	return input.reduce((a, b)=> a + b, 0);
}

let maximum = function (input) {
	return input.reduce((a, b) => Math.max(a, b));
	
}

let minimum = function (input) {
	return input.reduce((a, b) => Math.min(a, b));
	
}

document.getElementById("input-box").addEventListener("keyup", (e)=> {
    
    if (e.keyCode === 13) {
    	let input = e.target.value;
    	// getting rid of whitespace and comma at the end
    	input = input.replace(/,\s*$/, "");
        // slice string based on comma
        input = input.split(',');
        // check all inputs are numbers and convert them
        for (let i = 0; i < input.length; i++) {
        	let convert = Number(input[i]);

        	//if any input is not a number it is returned not a number
        	if (isNaN(convert)) {
        		document.getElementById('err').textContent = 'Not A Number';
        		return console.log('Not A Number');
        	}

        	input[i] = convert;
        }
        document.getElementById('err').textContent = '';
        // now if it passes as a number execute the following methods

        let sum = sumOfInput(input);
        let max = maximum(input);
        let min = minimum(input);
        let avg = sum/input.length;
        let reverseArray = input.slice().reverse().toString();
        
        console.log(max);
        document.getElementById('max').textContent = max.toString();
        
        console.log(min);
        document.getElementById('min').textContent = min.toString();

        console.log(sum);
        document.getElementById('sum').textContent = sum.toString();
        
        console.log(avg);
		document.getElementById('average').textContent = avg.toString();

		console.log(input);
		console.log(reverseArray);
		document.getElementById('reverse-order').textContent = reverseArray;     

       
    }
});