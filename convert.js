var decimal = 18;
function convertToDecimal() {
	var expo = document.getElementById("expo");
	var expoValue = expo.value;
	if (isValidTo(expoValue)) {
		var result = document.getElementById("result");
		var decimalValue = bigDecimal.divide(expo.value, 10 ** decimal,"2")
		result.value = decimalValue.substring(0,decimalValue.length - 2);
	}else{
		var sizeExpo = expo.value.length - 1;
		expo.value = expo.value.substring(0,sizeExpo)
	}
}
function convertFromDecimal() {
	var result = document.getElementById("result");
	var resultValue = result.value;
	if (isValidFrom(resultValue)) {
		var expo = document.getElementById("expo");
		expo.value = bigDecimal.multiply(resultValue, 10 ** decimal);
	}else{
		var sizeResult = result.value.length - 1;
		result.value = result.value.substring(0,sizeResult)
	}
}
function isValidFrom(inputValue) {
	var integerPartSize = String(Math.trunc(inputValue)).length
	return !isNaN(inputValue) && inputValue.length <= 19+integerPartSize;
}
function isValidTo(inputValue) {
	return !isNaN(inputValue);
}