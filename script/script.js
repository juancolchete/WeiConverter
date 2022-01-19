var config = document.getElementById("div_config")
document.getElementById("button_config").addEventListener("click", changeDisplay)
document.getElementById("button_config2").addEventListener("click", changeDisplay)

function changeDisplay(){
    console.log("entrou")
    if(config.style.display == "flex"){
        config.style.display = "none"
    }else
        config.style.display = "flex"
}