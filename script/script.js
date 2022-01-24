var config = document.getElementById("div_config")
document.getElementById("button_config").addEventListener("click", changeDisplay);
document.getElementById("button_config2").addEventListener("click", changeDisplay);
document.getElementById("coin").addEventListener("change",getCurrency);

document.getElementById("coin").addEventListener("input", saveCurrentCoin);
document.getElementById("cut1").addEventListener("input", saveShortCut1);
document.getElementById("cut2").addEventListener("input", saveShortCut2);
document.getElementById("cut3").addEventListener("input", saveShortCut3);

document.getElementById("cutBtn1").addEventListener("click", copyShortCut1);
document.getElementById("cutBtn2").addEventListener("click", copyShortCut2);
document.getElementById("cutBtn3").addEventListener("click", copyShortCut3);


if (localStorage.getItem('coin') != undefined) {
	document.getElementById("coin").value = localStorage.getItem('coin');
}

function getCurrency(){
	if(document.getElementById("coin") != undefined){
		localStorage.setItem('coin', document.getElementById("coin").value);
	}
}
function changeDisplay(){
	if(config.style.display == "flex"){
		config.style.display = "none"
    }else
	config.style.display = "flex"
}
async function saveCurrentCoin(){
	localStorage.setItem('coin', document.getElementById("coin").value);
	await getCurrentPrice();
	await getPrice();
}

function saveShortCut1() {
	localStorage.setItem('cut1', document.getElementById("cut1").value)
}
function saveShortCut2() {
	localStorage.setItem('cut2', document.getElementById("cut2").value)
}
function saveShortCut3() {
	localStorage.setItem('cut3', document.getElementById("cut3").value)
}

function copyShortCut1() {
	navigator.clipboard.writeText(localStorage.getItem('cut1'));
}
function copyShortCut2() {
	navigator.clipboard.writeText(localStorage.getItem('cut2'));
}
function copyShortCut3() {
	navigator.clipboard.writeText(localStorage.getItem('cut3'));
}
