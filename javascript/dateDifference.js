// Function to convert ordinal date to standard date format
function convertOrdinalDate(dateString) {
  return dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
}

// Function to update the "days ago" for all h1 elements
function updateDaysAgo() {
  // Get all h1 elements within .blog-post
  var h1Elements = document.querySelectorAll('.blog-post h1');
  
  h1Elements.forEach(function(h1Element) {
    // Get the text content of the h1 tag
    var h1Text = h1Element.textContent;
    // Extract the date part before the ":"
    var dateString = h1Text.split(":")[0].trim();
    // Convert the ordinal date to standard date format
    dateString = convertOrdinalDate(dateString);
    // Parse the extracted date string
    var date = new Date(dateString);
    var today = new Date();
    var timeDiff = Math.abs(today.getTime() - date.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    // Create or update the p element for days ago
    var daysAgoElement = h1Element.nextElementSibling;
    if (!daysAgoElement || !daysAgoElement.classList.contains('days-ago')) {
      daysAgoElement = document.createElement('p');
      daysAgoElement.classList.add('days-ago');
      h1Element.parentNode.insertBefore(daysAgoElement, h1Element.nextSibling);
    }
    daysAgoElement.textContent = " - " + daysDiff + " days ago";
  });
}
// Call the function to update the days ago elements
updateDaysAgo();
