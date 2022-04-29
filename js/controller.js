var Controller = {};
Controller.save = function () {
    var login = $('._login').val();
    var pass = $('._pass').val();

    if (!login || !pass) {
        return;
    }

    var proxySetting = localStorage.proxySetting ? JSON.parse(localStorage.proxySetting) : {};
    proxySetting['auth'] = {};
    proxySetting['auth']['user'] = login;
    proxySetting['auth']['pass'] = pass;
    var settings = JSON.stringify(proxySetting);
    localStorage.proxySetting = settings;
    chrome.storage.sync.set({'proxySetting' : settings}, function() {});
};


document.addEventListener('DOMContentLoaded', function () {
    $('._save').click(function () {
        Controller.save();
        window.close();
    });

    $('._cancel').click(function () {
        window.close();
    });

});
