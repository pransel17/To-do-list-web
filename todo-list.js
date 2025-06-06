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

document.getElementById("Upcoming-Today-add-task-btn").addEventListener("click", function () {
  const input = document.getElementById("Upcoming-Today-task-input");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskList = document.querySelector(".Upcoming-Today-Tasks");

  // Create label
  const taskLabel = document.createElement("label");
  taskLabel.classList.add("task-item");

  // Create checkbox input
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create span for task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Append checkbox and span to label
  taskLabel.appendChild(checkbox);
  taskLabel.appendChild(span);

  // Append label to task list
  taskList.appendChild(taskLabel);

  // Clear input
  input.value = "";
});
