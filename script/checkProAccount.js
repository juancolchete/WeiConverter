chrome.identity.getProfileUserInfo(function (userInfo) {
    localStorage.setItem("email", userInfo.email);
});
setProAccount();
async function setProAccount() {
    try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer sk_test_51KLvWZEquv2zmw1T597zSyn4rwMIUHspghrct2YSaD2Acbg8kSPrTN7swIRyKPLZ449XKl9K1hvmKJ60vTMU333900KRUltB7w");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let subscription = {};
        let response = await fetch(`https://api.stripe.com/v1/customers?email=${localStorage.getItem("email")}`, requestOptions)
        let customer = await response.json();
        if (customer.data[0] != undefined) {
            if (customer.data.length > 0) {
                response = await fetch(`https://api.stripe.com/v1/subscriptions?customer=${customer.data[0].id}&status=active`, requestOptions)
                subscription = await response.json();
            }
            if (subscription.data != undefined && subscription.data.length > 0) {
                localStorage.setItem("isPro", true);
            } else {
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                let PaymentIntent = {}

                response = await fetch(`https://api.stripe.com/v1/payment_intents?customer=${customer.data[0].id}`, requestOptions)
                PaymentIntent = await response.json();
                if (PaymentIntent.data.length > 0 && PaymentIntent.data[0].amount == 2000) {
                    localStorage.setItem("isPro", true);
                } else {
                    disableProFeatures();
                }
            }
        } else {
            disableProFeatures()
        }
    } catch (ex) {
        console.log(ex)
    }
}
function disableProFeatures() {
    localStorage.setItem("isPro", false);
    document.getElementById("cutBtn2").style.display = "none";
    document.getElementById("cutBtn3").style.display = "none";
    document.getElementById("cut2").style.display = "none";
    document.getElementById("cut3").style.display = "none";
    document.getElementById("lblCut2").style.display = "none";
    document.getElementById("lblCut3").style.display = "none";
    document.getElementById("coin").style.display = "none";
    document.getElementById("lblCoin").style.display = "none";
}