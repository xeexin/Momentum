const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(){
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username);
  console.log(username);
  paintGreetings();
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if( savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show h1
    paintGreetings();
}

