


// Array of background images
const backgrounds = [
    'url("image1.jpg")',
    'url("image2.jpg")',
    'url("image3.jpg")',
    'url("image4.jpg")',
    'url("image5.jpg")',
    'url("image6.jpg")',
    'url("image7.jpg")',
    'url("image8.jpg")',
    'url("image9.jpg")',
    'url("image10.jpg")'
];

let currentBackgroundIndex = 0;

// Function to update background image
function updateBackground() {
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length; // Loop through images
}

// background image to change every 4 seconds
setInterval(updateBackground, 4000);

// Initial background update
updateBackground();

function updateCountdown() {
    const christmasDate = new Date("December 25, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = christmasDate - now;

    if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);



