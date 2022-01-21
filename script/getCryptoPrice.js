
getPrice();
function getPrice() {
  

  if (localStorage.getItem('coin') != undefined) {
    console.log("CoinId: "+ localStorage.getItem('coin'));
    var myHeaders = new Headers();
    myHeaders.append("access-control-allow-credentials", "*");
    myHeaders.append("access-control-allow-headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    myHeaders.append("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD, OPTIONS");
    myHeaders.append("access-control-allow-origin", "*");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`https://coin-market-cap-call.vercel.app/api/cmc?id=${localStorage.getItem('coin')}`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        document.getElementById("price").innerText = "$" + result.data[localStorage.getItem('coin')].quote.USD.price;
      })
      .catch(error => console.log('error', error));
  }
}