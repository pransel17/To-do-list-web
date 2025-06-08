// FOR SIGNIN BUTTON FOR MAIN PAGE
const SignInButton = document.getElementById("Sign-In-Button");
const HomePage = document.getElementById("HomePage");
const SignIn_Page = document.querySelector(".Main-Container"); // main container

SignInButton.addEventListener("click", function () {
  SignIn_Page.style.display = "none";
  HomePage.style.display = "flex";
});

// ACCESSING SIDEBAR ITEMS
const UpcomingButton = document.getElementById("Upcoming-Sidebar-Button");
const TodayButton = document.getElementById("Today-Sidebar-Button");
const CalendarButton = document.getElementById("Calendar-Sidebar-Button");
const StickyWallButton = document.getElementById("StickyWall-Sidebar-Button");
const List_WorkButton = document.getElementById("List-Work-Button");
const List_PersonalButton = document.getElementById("List-Personal-Button");
const List_StudyButton = document.getElementById("List-Study-Button");

// ACCESSING PAGES
const UpcomingPage = document.getElementById("Upcoming-Page");
const TodayPage = document.getElementById("Today-Page");
const CalendarPage = document.getElementById("Calendar-Page");
const StickyWallPage = document.getElementById("StickyWall-Page");
const MainHomePageContent = document.querySelector(".Home-Page-Contents"); // the first div that says "Home page"
const List_WorkPage = document.getElementById("List-Work-Page");
const List_PersonalPage = document.getElementById("List-Personal-Page");
const List_StudyPage = document.getElementById("List-Study-Page");







// Helper to hide all pages,b 
function hideAllPages() {
  UpcomingPage.style.display = "none";
  TodayPage.style.display = "none";
  CalendarPage.style.display = "none";
  StickyWallPage.style.display = "none";
  MainHomePageContent.style.display = "none";
  List_WorkPage.style.display = "none";
  List_PersonalPage.style.display = "none";
  List_StudyPage.style.display = "none";
}


UpcomingButton.addEventListener("click", function () {
  hideAllPages(); // matic hide except sa clicked button
  UpcomingPage.style.display = "flex";
});


TodayButton.addEventListener("click", function () {
  hideAllPages();
  TodayPage.style.display = "flex";
});

CalendarButton.addEventListener("click", function () {
  hideAllPages();
  CalendarPage.style.display = "flex";
});

StickyWallButton.addEventListener("click", function () {
  hideAllPages();
  StickyWallPage.style.display = "flex";
});

List_WorkButton.addEventListener("click", function(){
  hideAllPages();
  List_WorkPage.style.display = "flex";

});

List_PersonalButton.addEventListener("click", function(){
  hideAllPages();
  List_PersonalPage.style.display = "flex";

});
List_StudyButton.addEventListener("click", function(){
  hideAllPages();
  List_StudyPage.style.display = "flex";

});






// para sa highlight ng active button
const sidebarButtons = document.querySelectorAll(".sidebar-button");

sidebarButtons.forEach(button => {
  button.addEventListener("click", () => {
    sidebarButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});




// aayusin pa later

// This function sets up task adding functionality for any container
function setupTaskInput(wrapperSelector) { 
  const wrapper = document.querySelector(wrapperSelector);
  if (!wrapper) return;

  const addButton = wrapper.querySelector(".Add-task-btn");
  const input = wrapper.querySelector(".task-input");
  const taskList = wrapper.parentElement.querySelector(".Upcoming-Tasks");

  addButton.addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText === "") return;

    // Create task label
    const taskLabel = document.createElement("label"); // createElement("label") → create a <label> element from the html file wow so kahit di me magdeclare for each galing
    taskLabel.classList.add("task-item"); //t adds the specified class(es) to that element’s class attribute. DAEEEBAAK

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("Today-checkbox");

    // Create task span
    const span = document.createElement("span");
    span.textContent = taskText;

    taskLabel.appendChild(checkbox);
    taskLabel.appendChild(span);

    taskList.appendChild(taskLabel);

    input.value = "";
  });
}

// Call the function for each section // Dito gagana yung wrapper selector
setupTaskInput("#Today-task-input-wrapper");







  // <---------------CALENDAR--------------> 
  //  DATE AUTOMATION

const today = new Date();

// Format the date — e.g., "June 7, 2025"
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);

// : Insert into the div
document.getElementById("Today-Date-Automation").textContent = formattedDate;
document.getElementById("Calendar-Date-Automation").textContent = formattedDate;


// FOR CALENDAR DISPLAY

let currentDate = new Date();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];    
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];    
function generateCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Update month/year display
    document.getElementById('cal-month-year').textContent = 
        `${monthNames[month]} ${year}`;    
    // Clear previous calendar
    const grid = document.getElementById('cal-grid');
    grid.innerHTML = '';    
    // Add day headers
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'cal-day-header';
        dayHeader.textContent = day;
        grid.appendChild(dayHeader);
    });    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        const prevMonthDay = new Date(year, month, -(startingDayOfWeek - 1 - i));
        const dayCell = document.createElement('div');
        dayCell.className = 'cal-day-cell';
        dayCell.innerHTML = `<span class="cal-day-number cal-day-other-month">${prevMonthDay.getDate()}</span>`;
        grid.appendChild(dayCell);
    }    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'cal-day-cell';
        
        // Check if this is today
        const cellDate = new Date(year, month, day);
        if (cellDate.toDateString() === today.toDateString()) {
            dayCell.classList.add('cal-day-today');
        }    
        dayCell.innerHTML = `<span class="cal-day-number">${day}</span>`;
        dayCell.onclick = () => selectDay(dayCell, day);
        grid.appendChild(dayCell);
    }    
    // Fill remaining cells with next month's days
    const totalCells = 42; // 6 rows × 7 days
    const cellsUsed = startingDayOfWeek + daysInMonth;
    for (let day = 1; cellsUsed + day - 1 < totalCells; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'cal-day-cell';
        dayCell.innerHTML = `<span class="cal-day-number cal-day-other-month">${day}</span>`;
        grid.appendChild(dayCell);
    }
}    
function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    generateCalendar();
}    
function selectDay(cell, day) {
    // Remove previous selection
    document.querySelectorAll('.cal-day-selected').forEach(el => {
        el.classList.remove('cal-day-selected');
    });
    
    // Add selection to clicked day
    if (!cell.querySelector('.cal-day-other-month')) {
        cell.classList.add('cal-day-selected');
    }
}    
function goToToday() {
    currentDate = new Date();
    generateCalendar();
}    
// Initialize calendar
generateCalendar();



