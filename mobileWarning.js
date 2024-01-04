document.addEventListener('DOMContentLoaded', function() {
    var userAgent = navigator.userAgent;

    var isIOS = /iPad|iPhone|iPod/.test(userAgent);
    var isAndroid = /Android/.test(userAgent);

    if (isIOS || isAndroid) {
        var mobileWarning = document.getElementById('mobileWarning');
        mobileWarning.classList.add('visible');
    }
});
