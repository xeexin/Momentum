const title = document.querySelector("div.hello:first-child h1");
console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked");
}
function handlemouseEnter(){
    title.innerText="Mouse is here";
    console.log("Mouse is here!");
}
function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handlemouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

//MDL : https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement