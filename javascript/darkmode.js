document.addEventListener('DOMContentLoaded', function () {
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
  var header = document.getElementById('header');
  var headings = document.querySelectorAll('h1, h2');
  var paragraphs = document.querySelectorAll('p');

  if (isNightMode) {
    // Night mode
    body.classList.add('night-mode');
    btn.style.backgroundImage = "url('/images/4444/moon.gif')";
    btn.style.backgroundColor = 'black';
    header.style.textShadow = '4px 4px #0615e2';

    // Set font color and text shadow for headings and paragraphs
    headings.forEach(function (heading) {
      heading.style.color = 'white';
      heading.style.textShadow = '3px 3px #0615e2';
    });

    paragraphs.forEach(function (paragraph) {
      paragraph.style.color = 'white';
      paragraph.style.textShadow = '3px 3px #0615e2';
    });
  } else {
    // Bright mode
    body.classList.remove('night-mode');
    btn.style.backgroundImage = "url('/images/4444/world.gif')";
    btn.style.backgroundColor = '#001aff';

    // Change text shadow color to black
    header.style.textShadow = '6px 6px #000000';

    // Reset font color and text shadow for headings and paragraphs
    headings.forEach(function (heading) {
      heading.style.color = '';
      heading.style.textShadow = '3px 3px black';
    });

    paragraphs.forEach(function (paragraph) {
      paragraph.style.color = '';
      paragraph.style.textShadow = '3px 3px black';
    });
  }
}
