  // Function to update the clock
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var meridiem = 'AM'; // Default to AM

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
        meridiem = 'PM';
    } else if (hours === 0) {
        hours = 12; // Midnight is 12 AM
    } else if (hours === 12) {
        meridiem = 'PM'; // Noon is 12 PM
    }

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Format the time
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;

    // Update the content of the right-aligned div
    document.getElementById('time').innerText = timeString;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Call updateClock function once to initially set the clock
updateClock();




// Function to update the day and date
function updateDayAndDate() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const dayAndDate = `${day}, ${month} ${date}, ${year}`;

    // Update the content and style of the left-aligned div
    const weatherInfoElement = document.getElementById('date');
    weatherInfoElement.textContent = dayAndDate;
    
    // Apply styling
    weatherInfoElement.style.fontFamily = 'Arial, sans-serif';
    weatherInfoElement.style.fontSize = '1.5rem';
    weatherInfoElement.style.fontWeight = 'bold';
    weatherInfoElement.style.color = 'brown';
}

// Call updateDayAndDate function to update the day and date when the page loads
updateDayAndDate();
