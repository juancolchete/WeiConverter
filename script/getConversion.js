document.getElementById("unit").addEventListener("change",getUnitConversion);

function getUnitConversion(){
	if(document.getElementById("unit") != undefined){
		localStorage.setItem('conversion', document.getElementById("unit").value);
	}
}