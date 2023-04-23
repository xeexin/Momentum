const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

const  link = document.querySelector("a");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event){
  event.preventDefault();
  console.log(loginInput.value);

}
function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", handleLinkClick);