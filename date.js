// Get today's date
const today = new Date();

// Define the month names
const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

// Define the suffixes for the day
const daySuffixes = ["st", "nd", "rd", "th"];

// Get the day of the month
const day = today.getDate();
// Get the month
const month = today.getMonth();
// Get the year
const year = today.getFullYear();

// Get the suffix for the day
let daySuffix;
if (day >= 11 && day <= 13) {
    daySuffix = "th";
} else {
    daySuffix = daySuffixes[(day - 1) % 10] || "th";
}

// Format the date string
const dateString = `Today's date: ${monthNames[month]} ${day}${daySuffix} ${year}`;

// Log the date string
document.querySelector("header").textContent = dateString;