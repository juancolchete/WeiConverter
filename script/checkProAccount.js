async function setProAccount() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic cmtfdGVzdF81MUtMdldaRXF1djJ6bXcxVERhUHZEM3lRd0pJOUpnNTVKNXUxSHI0N0dnVVFycXNhQ0VsalVTV2h1WlZaRmVFWG5SVWd6SVE3NWk0R25PVTBpVE9FcDhCdzAwamkwSGdZVkc6");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.stripe.com/v1/customers?email=lxcaliente@gmail.com", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer rk_test_51KLvWZEquv2zmw1TDaPvD3yQwJI9Jg55J5u1Hr47GgUQrqsaCEljUSWhuZVZFeEXnRUgzIQ75i4GnOU0iTOEp8Bw00ji0HgYVG");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.stripe.com/v1/subscriptions?customer=cus_L20jNkBU6yjaZt&status=active", requestOptions)
        .then(response => response.json())
        .then(result => console.log("Subscribed: " + result.data.length > 0))
        .catch(error => console.log('error', error));
}