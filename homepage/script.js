let currentDate = new Date();
let events = {};

function renderCalendar() {
    const calendar = document.getElementById("calendar");
    const currentMonth = document.getElementById("currentMonth");
    calendar.innerHTML = "";

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    currentMonth.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("div");
        calendar.appendChild(emptyCell);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
        let day = document.createElement("div");
        day.textContent = i;
        day.dataset.date = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${i}`;
        day.addEventListener("click", function() {
            addEvent(this);
        });
        if (events[day.dataset.date]) {
            day.classList.add("event");
        }
        calendar.appendChild(day);
    }
}

function addEvent(dayElement) {
    let date = dayElement.dataset.date;
    let eventName = prompt("Enter event name:");
    if (eventName) {
        events[date] = eventName;
        dayElement.classList.add("event");
    }
}

function changeMonth(step) {
    currentDate.setMonth(currentDate.getMonth() + step);
    renderCalendar();
}

document.addEventListener("DOMContentLoaded", renderCalendar);

// Get elements
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

// Open popup when clicking the bell icon
openPopup.onclick = function() {
    popup.style.display = "block";
}

// Close popup when clicking the close button
closePopup.onclick = function() {
    popup.style.display = "none";
}

// Close popup if clicking outside the content box
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
