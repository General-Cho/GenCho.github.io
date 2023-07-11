// Get the subCount element from the HTML file
const subCountElement = document.getElementById("subCount");

// Function to update the sub count
function updateSubCount(AIzaSyAVhD) {
  // Call the YouTube API to get your sub count
  // You'll need to create a YouTube API key for this

  // Once you have the sub count, update it on your website
  subCountElement.textContent = "51"; // Replace "Your sub count here" with the actual number you receive from the API
}

// Call the updateSubCount function immediately
updateSubCount();

// Set a timer to call the updateSubCount function every few seconds
setInterval(updateSubCount, 2000); // Replace 5000 with the number of milliseconds you want (e.g., 5000 = 5 seconds)

