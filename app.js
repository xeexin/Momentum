const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleh1Click(){
    h1.style.color = "blue";
    console.log("h1 was clicked");
}
function handlemouseEnter(){
    h1.innerText="Mouse is here";
    console.log("Mouse is here!");
}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}


//MDL : https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement

h1.addEventListener("click", handleh1Click);
//h1.onclick = handleh1Click;

h1.addEventListener("mouseenter", handlemouseEnter);
//h1.onmouseenter = handlemouseEnter;

h1.addEventListener("mouseleave",handleMouseLeave);
//h1.onmouseleave = handleMouseLeave;

function handleWindowResize(){
    document.body.style.backgroundColor= "tomato";
}

function handleWindowCopy(){
    alert("Copier!");
}
function handleWindowOffline(){
    alert("no wifi :(");
}
function handleWindowOnline(){
    alert("All Good :)");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);