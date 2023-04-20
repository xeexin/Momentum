const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);