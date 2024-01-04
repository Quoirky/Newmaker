document.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent;

    var isIOS = /iPad|iPhone|iPod/.test(userAgent);
    var isAndroid = /Android/.test(userAgent);

    if (isIOS || isAndroid) {
        // Redirect to mobile_warning.html for mobile users
        window.location.href = 'mobile_warning.html';
    }
});
