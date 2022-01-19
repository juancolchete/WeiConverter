var decimal = 18;


document.getElementById("expo").addEventListener("input", convertToDecimal);
document.getElementById("result").addEventListener("input", convertFromDecimal);
if (localStorage.getItem('conversion') != undefined) {
	document.getElementById("unit").value = localStorage.getItem('conversion');
}

function onLoad() {
	getUnitConversion();
}
function convertToDecimal() {
	onLoad();
	var expo = document.getElementById("expo");
	var expoValue = expo.value;
	if (isValidTo(expoValue)) {
		var result = document.getElementById("result");
		var decimalValue = bigDecimal.divide(expo.value, localStorage.getItem('conversion'), "2")
		result.value = decimalValue.substring(0, decimalValue.length - 2);
	} else {
		var sizeExpo = expo.value.length - 1;
		expo.value = expo.value.substring(0, sizeExpo)
	}
}
function convertFromDecimal() {
	onLoad();
	var result = document.getElementById("result");
	var resultValue = result.value;
	if (isValidFrom(resultValue)) {
		var expo = document.getElementById("expo");
		expo.value = bigDecimal.multiply(resultValue, localStorage.getItem('conversion'));
	} else {
		var sizeResult = result.value.length - 1;
		result.value = result.value.substring(0, sizeResult)
	}
}
function getUnitConversion() {
	if (localStorage.getItem('conversion') == undefined) {
		localStorage.setItem('conversion', 1000000000000000000);
	}
}
function isValidFrom(inputValue) {
	var integerPartSize = String(Math.trunc(inputValue)).length
	return !isNaN(inputValue) && inputValue.length <= 19 + integerPartSize;
}
function isValidTo(inputValue) {
	return !isNaN(inputValue);
}