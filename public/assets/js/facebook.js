/*global window, FB, document*/
window.fbAsyncInit = function () {
    'use strict';
    FB.init({
        appId: '1066153896821007',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

(function (d, s, id) {
    'use strict';
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('Logged in and authenticated');
    } else {
        console.log('Not authenticated');
    }
}
