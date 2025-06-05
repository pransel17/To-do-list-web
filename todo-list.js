

const SignInButton = document.getElementById("Sign-In-Button");
const HomePage = document.getElementById("HomePage");
const SignIn_Page = document.querySelector(".Main-Container"); // main container


SignInButton.addEventListener("click", function() {
  SignIn_Page.style.display = "none";
  HomePage.style.display = "flex";
});




