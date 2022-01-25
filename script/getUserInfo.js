chrome.identity.getProfileUserInfo(function(userInfo) {
    document.getElementById("user").innerText =  userInfo.email
   });