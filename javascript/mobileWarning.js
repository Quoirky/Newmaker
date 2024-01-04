// Function to check if the device is a mobile device
function isMobileDevice() {
    return window.matchMedia('(max-width: 768px)').matches;
  }
  
  // Function to show the warning message
  function showMobileWarning() {
    var mobileWarning = document.getElementById('mobileWarning');
    if (isMobileDevice()) {
      mobileWarning.classList.remove('hidden');
    }
  }
  
  // Function to proceed to the website
  function proceedToWebsite() {
    var mobileWarning = document.getElementById('mobileWarning');
    mobileWarning.classList.add('hidden');
  }
  
  // Run the detection and show warning if necessary
  document.addEventListener('DOMContentLoaded', function () {
    showMobileWarning();
  });
  