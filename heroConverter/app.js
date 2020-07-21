let convertToKg = function (weight) {
	return (weight *  0.45359237).toFixed(4);
}

let convertToLb = function(weight){
	return (weight/0.45359237 ).toFixed(4);
}



document.getElementById('go').addEventListener('click', (e) => {
	const value = document.getElementById('convert').value;
	let result = null;
	if (value != '') {
		// first check which system it is to be converted
		let val = document.getElementById('option');
		let option = val.options[val.selectedIndex].text
		

		switch (option) {
			case 'kg to lb':
				result = convertToLb(value)
				console.log(result)
				document.getElementById('result').textContent = result;
				break;
			default:
				result = convertToKg(value)
				console.log(result);
				document.getElementById('result').textContent = result;

				break;
		}
	}

})