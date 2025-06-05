

const SignInButton = document.getElementById("Sign-In-Button");
const Homepage = document.getElementById("HomePage");
const LoginPage = document.querySelector(".Main-Container"); // main container


SignInButton.addEventListener("click", function() {
  LoginPage.style.display = "none";
  Homepage.style.display = "flex";
});




