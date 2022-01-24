loadValues();
function loadValues(){
  getCurrentPrice();
  getPrice();
  setInterval(getCurrentPrice, 60000)
}

function getPrice() {
    if(localStorage.getItem("currentPrice") != undefined){
      element = document.getElementById('coin');
      let symbol = element.options[element.selectedIndex].text;
      let quantity = document.getElementById("result").value
      let crypto = bigDecimal.multiply(localStorage.getItem("currentPrice"), quantity);
      let bigCrypto = new bigDecimal(crypto);
      if(crypto == 0){
        document.getElementById("price").innerText = `${symbol} = $${Number(localStorage.getItem("currentPrice")).toFixed(2)}`;
      }else{
        let rawCrypto  = Number(bigCrypto.getValue()).toFixed(2)
        let formatCrypto = rawCrypto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById("price").innerText = `${quantity} ${symbol} = $${formatCrypto}`;
      }
    }
}

async function getCurrentPrice(){
  if (localStorage.getItem('coin') != undefined) {
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("id", localStorage.getItem('coin'));

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    try{
      response = await fetch("https://coin-market-cap-call.vercel.app/", requestOptions);
      result = await response.json();
      localStorage.setItem("currentPrice",result.data[localStorage.getItem('coin')].quote.USD.price);
    }catch(error){
      console.log(error)
    }
    
    
    }
}