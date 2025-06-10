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





// FOR ADD TASKS IN CALENDAR



// Task Management System - Complete solution in one file
// Add this to your existing JavaScript

// Store tasks in memory
let tasks = {};

// Add CSS styles to the page
function addTaskStyles() {
    const styles = `
        <style id="task-styles">
        /* Task Panel Styles */
        .task-panel {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .task-panel-content {
            background: white;
            border-radius: 15px;
            padding: 25px;
            width: 90%;
            max-width: 450px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .task-panel h2 {
            margin-bottom: 15px;
            color: #333;
            text-align: center;
        }

        .selected-date {
            background: #007bff;
            color: white;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 15px;
            font-weight: bold;
        }

        .task-form input, .task-form textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 14px;
            box-sizing: border-box;
        }

        .task-form textarea {
            resize: vertical;
            min-height: 60px;
        }

        .btn {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px;
            font-size: 14px;
        }

        .btn:hover {
            background: #0056b3;
        }

        .btn-secondary {
            background: #6c757d;
        }

        .btn-secondary:hover {
            background: #545b62;
        }

        .btn-danger {
            background: #dc3545;
        }

        .btn-danger:hover {
            background: #c82333;
        }

        .task-list {
            margin-top: 20px;
        }

        .task-item-full {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
        }

        .task-item-full h4 {
            margin: 0 0 5px 0;
            color: #333;
        }

        .task-item-full p {
            margin: 0;
            color: #666;
            font-size: 13px;
        }

        .task-item-full .task-time {
            color: #007bff;
            font-weight: bold;
        }

        .task-preview {
            font-size: 9px;
            margin-top: 4px;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .task-preview-item {
            background: #2a2a2a;
            color: white;
            padding: 4px 6px;
            border-radius: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: 500;
            position: relative;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .task-preview-item.completed {
            background: #2a2a2a;
        }

        .task-preview-item.completed::before {
            content: "✓";
            color: #4caf50;
            font-weight: bold;
            font-size: 10px;
        }

        .task-preview-item.important::before {
            content: "🔴";
            font-size: 8px;
        }

        .task-preview-item.more::before {
            content: "···";
            color: #999;
            font-weight: bold;
        }

        .cal-day-has-tasks {
            background-color: #101010 !important;
            border-left: 3px solid #2196f3 !important;
        }
        </style>
    `;
    
    // Only add styles if they don't exist
    if (!document.getElementById('task-styles')) {
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Add HTML panel to the page
function addTaskPanel() {
    const taskPanelHTML = `
        <div id="task-panel" class="task-panel">
            <div class="task-panel-content">
                <h2>Manage Tasks</h2>
                <div id="selected-date-display" class="selected-date"></div>
                
                <div class="task-form">
                    <input type="text" id="task-title" placeholder="Task title" maxlength="50">
                    <textarea id="task-description" placeholder="Task description (optional)" maxlength="200"></textarea>
                    <input type="time" id="task-time">
                    <button class="btn" onclick="addTask()">Add Task</button>
                    <button class="btn btn-secondary" onclick="closeTaskPanel()">Cancel</button>
                </div>
                
                <div id="task-list" class="task-list"></div>
            </div>
        </div>
    `;
    
    // Only add panel if it doesn't exist
    if (!document.getElementById('task-panel')) {
        document.body.insertAdjacentHTML('beforeend', taskPanelHTML);
    }
}

// Initialize the task system
function initializeTaskSystem() {
    addTaskStyles();
    addTaskPanel();
    
    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        const taskPanel = document.getElementById('task-panel');
        if (e.target === taskPanel) {
            closeTaskPanel();
        }
    });
}

// Modified selectDay function - Replace your existing selectDay function with this
function selectDay(cell, day) {
    // Remove previous selection
    document.querySelectorAll('.cal-day-selected').forEach(el => {
        el.classList.remove('cal-day-selected');
    });
    
    // Add selection to clicked day
    if (!cell.querySelector('.cal-day-other-month')) {
        cell.classList.add('cal-day-selected');
        
        // Open task panel
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        openTaskPanel(selectedDate);
    }
}

// Open task panel for selected date
function openTaskPanel(date) {
    const dateKey = formatDateKey(date);
    const dateString = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    document.getElementById('selected-date-display').textContent = dateString;
    document.getElementById('task-panel').style.display = 'flex';
    
    // Store current date for task operations
    window.currentTaskDate = date;
    
    // Clear form
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-time').value = '';
    
    // Display existing tasks
    displayTasksForDate(dateKey);
}

// Close task panel
function closeTaskPanel() {
    document.getElementById('task-panel').style.display = 'none';
}

// Add new task
function addTask() {
    const title = document.getElementById('task-title').value.trim();
    const description = document.getElementById('task-description').value.trim();
    const time = document.getElementById('task-time').value;
    
    if (!title) {
        alert('Please enter a task title');
        return;
    }
    
    const dateKey = formatDateKey(window.currentTaskDate);
    
    if (!tasks[dateKey]) {
        tasks[dateKey] = [];
    }
    
    const task = {
        id: Date.now(),
        title: title,
        description: description,
        time: time,
        completed: false,
        important: false
    };
    
    tasks[dateKey].push(task);
    
    // Clear form
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-time').value = '';
    
    // Refresh displays
    displayTasksForDate(dateKey);
    updateCalendarDisplay();
}

// Display tasks for a specific date in the panel
function displayTasksForDate(dateKey) {
    const taskList = document.getElementById('task-list');
    const dateTasks = tasks[dateKey] || [];
    
    if (dateTasks.length === 0) {
        taskList.innerHTML = '<p style="text-align: center; color: #666;">No tasks for this date</p>';
        return;
    }
    
    taskList.innerHTML = dateTasks.map(task => `
        <div class="task-item-full">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskComplete('${dateKey}', ${task.id})">
                <h4 style="margin: 0; ${task.completed ? 'text-decoration: line-through; color: #999;' : ''}">${task.title}</h4>
                <button class="btn" onclick="toggleTaskImportant('${dateKey}', ${task.id})" style="padding: 2px 6px; font-size: 10px; ${task.important ? 'background: #ff4444;' : 'background: #ccc;'}">${task.important ? '🔴' : '⭐'}</button>
            </div>
            ${task.time ? `<p class="task-time">⏰ ${formatTime(task.time)}</p>` : ''}
            ${task.description ? `<p>${task.description}</p>` : ''}
            <button class="btn btn-danger" onclick="deleteTask('${dateKey}', ${task.id})" style="margin-top: 5px; padding: 5px 10px; font-size: 12px;">Delete</button>
        </div>
    `).join('');
}

// Toggle task completion
function toggleTaskComplete(dateKey, taskId) {
    if (tasks[dateKey]) {
        const task = tasks[dateKey].find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            displayTasksForDate(dateKey);
            updateCalendarDisplay();
        }
    }
}

// Toggle task importance
function toggleTaskImportant(dateKey, taskId) {
    if (tasks[dateKey]) {
        const task = tasks[dateKey].find(t => t.id === taskId);
        if (task) {
            task.important = !task.important;
            displayTasksForDate(dateKey);
            updateCalendarDisplay();
        }
    }
}

// Delete task
function deleteTask(dateKey, taskId) {
    if (tasks[dateKey]) {
        tasks[dateKey] = tasks[dateKey].filter(task => task.id !== taskId);
        if (tasks[dateKey].length === 0) {
            delete tasks[dateKey];
        }
    }
    
    displayTasksForDate(dateKey);
    updateCalendarDisplay();
}

// Format date for use as key
function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// Format time for display
function formatTime(timeString) {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${period}`;
}

// Update calendar display with task previews
function updateCalendarDisplay() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayTasks = tasks[dateKey] || [];
        
        // Find the day cell
        const dayCells = document.querySelectorAll('.cal-day-cell');
        dayCells.forEach(cell => {
            const dayNumber = cell.querySelector('.cal-day-number');
            if (dayNumber && !dayNumber.classList.contains('cal-day-other-month') && 
                parseInt(dayNumber.textContent) === day) {
                
                // Remove existing task preview
                const existingPreview = cell.querySelector('.task-preview');
                if (existingPreview) {
                    existingPreview.remove();
                }
                
                // Remove task indicator class
                cell.classList.remove('cal-day-has-tasks');
                
                if (dayTasks.length > 0) {
                    // Add task indicator class
                    cell.classList.add('cal-day-has-tasks');
                    
                    // Add task preview
                    const preview = document.createElement('div');
                    preview.className = 'task-preview';
                    
                    const maxPreview = 2; // Show max 2 tasks in preview
                    const previewTasks = dayTasks.slice(0, maxPreview);
                    
                    previewTasks.forEach(task => {
                        const taskDiv = document.createElement('div');
                        let className = 'task-preview-item';
                        if (task.completed) className += ' completed';
                        if (task.important) className += ' important';
                        
                        taskDiv.className = className;
                        
                        let taskText = task.title;
                        if (task.time && !task.completed && !task.important) {
                            taskText = `${formatTime(task.time)} ${task.title}`;
                        }
                        
                        taskDiv.textContent = taskText;
                        preview.appendChild(taskDiv);
                    });
                    
                    if (dayTasks.length > maxPreview) {
                        const moreDiv = document.createElement('div');
                        moreDiv.className = 'task-preview-item more';
                        moreDiv.textContent = `${dayTasks.length - maxPreview} more`;
                        preview.appendChild(moreDiv);
                    }
                    
                    cell.appendChild(preview);
                }
            }
        });
    }
}

// Modified generateCalendar function to include task updates
const originalGenerateCalendar = generateCalendar;
generateCalendar = function() {
    originalGenerateCalendar();
    // Update task display after calendar is generated
    setTimeout(updateCalendarDisplay, 100);
};

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTaskSystem();
    setTimeout(updateCalendarDisplay, 500);
});