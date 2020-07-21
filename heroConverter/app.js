let convertToKg = function (weight) {
	return (weight *  0.45359237).toFixed(3);
}

let convertToLb = function(weight){
	return (weight/0.45359237 ).toFixed(3);
}



document.getElementById('go').addEventListener('click', (e) => {
	const value = document.getElementById('convert').value;
	
	if (value != '') {
		// first check which system it is to be converted
		let val = document.getElementById('option');
		let option = val.options[val.selectedIndex].text
		

		switch (option) {
			case 'kg to lb':
				console.log(convertToLb(value))
				break;
			default:


				console.log(convertToKg(value));
				break;
		}
	}

})