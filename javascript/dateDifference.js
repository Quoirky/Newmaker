// Function to convert ordinal date to standard date format
function convertOrdinalDate(dateString) {
    return dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
  }
  
  // Get the text content of the h1 tag
  var h1Text = document.querySelector('.blog-post h1').textContent;
  // Extract the date part before the ":"
  var dateString = h1Text.split(":")[0].trim();
  // Convert the ordinal date to standard date format
  dateString = convertOrdinalDate(dateString);
  // Parse the extracted date string
  var date = new Date(dateString);
  var today = new Date();
  var timeDiff = Math.abs(today.getTime() - date.getTime());
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  document.getElementById("date-difference").textContent = " - " + daysDiff + " days ago";
  