
getPrice();
function getPrice() {


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

    fetch("https://coin-market-cap-call.vercel.app/", requestOptions)
      .then(response => response.json())
      .then(result => {
        element = document.getElementById('coin');
        let symbol = element.options[element.selectedIndex].text;
        let currentPrice = result.data[localStorage.getItem('coin')].quote.USD.price;
        let quantity = document.getElementById("result").value
        let crypto = bigDecimal.multiply(currentPrice, quantity);
        document.getElementById("price").innerText = `${quantity} ${symbol} = $${Number(crypto).toFixed(2)}`;
      })
      .catch(error => console.log('error', error));
  }
}