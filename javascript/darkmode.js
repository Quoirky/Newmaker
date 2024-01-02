       document.addEventListener('DOMContentLoaded', function() {
    // Check if user has a preference stored in local storage
    var isNightMode = localStorage.getItem('nightMode') === 'true';

    // Set the mode based on the stored preference or default to dark mode
    setNightMode(isNightMode);
  });

  function toggleNightMode() {
    var body = document.querySelector('body');
    body.classList.toggle('night-mode');
    
    // Check if night mode is enabled after toggle
    var isNightMode = body.classList.contains('night-mode');
    
    // Store the user's preference in local storage
    localStorage.setItem('nightMode', isNightMode);

    // Set the new mode
    setNightMode(isNightMode);
  }

  function setNightMode(isNightMode) {
    var btn = document.querySelector('.btn');
    var body = document.querySelector('body');

    if (isNightMode) {
      // Night mode
      body.classList.add('night-mode');
      btn.style.backgroundImage = "url('/images/4444/moon.gif')";
      btn.style.backgroundColor = 'black';
    } else {
      // Bright mode
      body.classList.remove('night-mode');
      btn.style.backgroundImage = "url('/images/4444/world.gif')";
      btn.style.backgroundColor = '#0000FF';
    }
  }