chrome.webRequest.onAuthRequired.addListener(handleAuthRequest,{urls: ["<all_urls>"]}, ["asyncBlocking"]);

function handleAuthRequest(details, callback) {
    var proxySetting = undefined;
    if (!localStorage.proxySetting) {
        return;
    }

    proxySetting = JSON.parse(localStorage.proxySetting);

    var user = proxySetting['auth']['user'];
    var pass = proxySetting['auth']['pass'];
    callback({authCredentials: {username: user, password: pass}});
}

